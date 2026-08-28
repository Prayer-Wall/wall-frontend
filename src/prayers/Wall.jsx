import { useState, useEffect } from "react";
import { Link } from "react-router";
import { getPrayers } from "../api/prayers";
import { useAuth } from "../auth/AuthContext";

const Wall = () => {
   const [prayers, setPrayers] = useState();
   const {token} = useAuth();

   const syncPrayers = async () => {
      const retrievedPrayers = await getPrayers(token);
      setPrayers(retrievedPrayers);
   }
   
   useEffect(() => {
      syncPrayers();
   }, [])

   if (!prayers) return <h2>Loading....</h2>

   return (
      <>
         <aside>
            <p>Add Prayer</p>
            <Link to="/">Answered</Link>
         </aside>
         <section>
            <h1>Wall</h1>
         </section>
      </>
   )
}

export default Wall;