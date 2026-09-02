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
         let image = null;
         const formImage = formData.get("img");
         if (formImage.name === '') {
            image = image;
         } else if (formImage.type !== "image/png" || formImage.type !== "image/jpeg") {
            throw new Error("Image must be a JPEG or PNG file");
         }
         
         const prayer = {
            image,
            prayer: formData.get("prayer")
         }
         
         await addPrayer(token, prayer)
         navigate("/wall")
      } catch (e) {
         setError(e.message)
      }
   }
 
   return (
      <form id="prayer-form" action={tryAddPrayer} encType="multipart/form-data">
         <input type="file" name="img"/>
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