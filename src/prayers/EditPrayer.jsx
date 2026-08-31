import { useParams, useNavigate } from "react-router";
import { useAuth } from "../auth/AuthContext";
import { useEffect, useState } from "react";
import { editPrayer, getPrayerById } from "../api/prayers";
import "./prayer.css"

const EditPrayer = () => {
   const {id} = useParams();
   const {token} = useAuth();
   const [error, setError] = useState();
   const [prayer, setPrayer] = useState();
   const navigate = useNavigate();

   const getPrayer = async () => {
      const currentPrayer = await getPrayerById(token, id);
      setPrayer(currentPrayer)
   }

   useEffect(() => {
      getPrayer();
   }, []);

   const tryEditPrayer = async (formData) => {
         try {
            setError(null)
   
            const newPrayer = {prayer: formData.get("prayer")}
   
            await editPrayer(token, newPrayer, id)
            navigate("/wall");
         } catch (e) {
            setError(e.message)
         }
   }  

   if (!prayer) return <p>Loading...</p>

   return (
      <section>
         <h1>Edit Prayer</h1>
         <form id="prayer-form" action={tryEditPrayer}>
            <textarea 
               name="prayer" 
               value={prayer}
               onChange={(e) => setPrayer(e.target.value)}
               required />
            <button id="prayer-form-add">Save</button>
            {error && <p className="error">{error}</p>}
         </form>
      </section>
   )
}

export default EditPrayer;