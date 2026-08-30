import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { addPrayer } from "../api/prayers";
import { useNavigate } from "react-router";
import "./prayer.css"

const AddPrayer = () => {
   const [error, setError] = useState();
   const {token} = useAuth();
   const navigate = useNavigate()

   const tryAddPrayer = async (formData) => {
      try {
         setError(null)
   
         const prayer = {
            prayer: formData.get("prayer")
         }
         

         await addPrayer(token, prayer)
         navigate("/wall")
      } catch (e) {
         setError(e.message)
      }
   }
 
   return (
      <form id="prayer-form" action={tryAddPrayer}>
         <textarea type="text" name="prayer" required />
         <button id="prayer-form-add">Add</button>
         {error && <p className="error">{error}</p>}
      </form>
   ); 
}

export default AddPrayer;