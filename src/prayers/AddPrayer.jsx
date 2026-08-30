import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { addPrayer } from "../api/prayers";

const AddPrayer = () => {
   const [error, setError] = useState();
   const {token} = useAuth();

   const tryAddPrayer = async (formData) => {
      try {
         setError(null)
   
         const prayer = formData.get("prayer");

         await addPrayer(token, prayer)
      } catch (e) {
         setError(e.message)
      }


   }

   return (
      <form id="prayer-form" action={tryAddPrayer}>
         <textarea type="text" name="prayer" required />
         <button>Add</button>
      </form>
   )
}

export default AddPrayer;