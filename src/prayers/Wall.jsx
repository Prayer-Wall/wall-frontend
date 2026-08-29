import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getPrayers } from "../api/prayers";
import { useAuth } from "../auth/AuthContext";
import PrayerList from "./PrayerList";
import "./wall.css"

const Wall = () => {
   const [prayers, setPrayers] = useState();
   const {token} = useAuth();
   const navigate = useNavigate();

   const syncPrayers = async () => {
      const retrievedPrayers = await getPrayers(token);
      setPrayers(retrievedPrayers);
   }
   
  token ? useEffect(() => {
      syncPrayers();
   }, []) : useEffect(() => {
      navigate("/");
   }, []) 

   if (!prayers) return <h2>Loading....</h2>

   return (
      <section id="prayer-page">
         <aside>
            <p id="add-prayer">Add Prayer</p>
         </aside>
         <section id="prayer-wall">
            <h1>Prayer Wall</h1>
            <PrayerList prayers={prayers} />
         </section>
      </section>
   )
}

export default Wall;