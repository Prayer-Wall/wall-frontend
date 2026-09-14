import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { addPrayer, editPrayer } from "../api/prayers";
import { useNavigate } from "react-router";
import "./prayer.css"

const AddPrayer = () => {
   const [error, setError] = useState();
   const [text, setText] = useState("");
   const {token} = useAuth();
   const navigate = useNavigate(); 

   const tryAddPrayer = async (formData) => {
      try {
         setError(null)
         const formImage = formData.get("img");
         if (formImage.name === "" || formImage.type === "image/jpeg" || formImage.type === "image/png") {
            await addPrayer(token, formData)
            setText("")
            navigate("/wall")
         } else {
            throw new Error("Image must be a JPEG or PNG file");
         }
         
      } catch (e) {
         setError(e.message)
      }
   }
 
   return (
      <form id="prayer-form" action={tryAddPrayer} encType="multipart/form-data">
         <label className="image-upload">
            Upload image (Optional)
            <input type="file" name="img"/>
         </label>
         <textarea 
            name="prayer" 
            placeholder="Add prayer"
            value={text} 
            onChange={(e) => setText(e.target.value)}
            required 
         />
         <button id="prayer-form-add">Add</button>
         {error && <p className="error">{error}</p>}
      </form>
   ); 
}

export default AddPrayer;