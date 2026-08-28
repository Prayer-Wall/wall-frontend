import { useState, useEffect } from "react";
import { Link } from "react-router";

const Wall = () => {
   const [prayers, setPrayers] = useState([])

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