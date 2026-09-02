import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { addPrayer, editPrayer } from "../api/prayers";
import { useNavigate } from "react-router";
import "./prayer.css"

const AddPrayer = () => {
   const [error, setError] = useState();
   const {token} = useAuth();
   const navigate = useNavigate(); 

   const tryAddPrayer = async (formData) => {
      try {
         setError(null)
         const formImage = formData.get("img");
         let image = null;
         formImage ? image = formImage : image = image;
         console.log(formImage)
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
         <textarea name="prayer" placeholder="Add prayer" required />
         <button id="prayer-form-add">Add</button>
         {error && <p className="error">{error}</p>}
      </form>
   ); 
}

export default AddPrayer;