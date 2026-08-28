import { useAuth } from "../auth/AuthContext";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
   const {token} = useAuth();
   const navigate = useNavigate();

   return (
      <header>
         <section id="logo">
            <h2 onClick={() => navigate("/wall")}>Prayer Wall</h2>
         </section>
         {
            token ? 
               <section id="links">
                  <NavLink to="/" className={({isActive}) => isActive ? "hide" : ""} id="answered">Answered</NavLink>
                  <NavLink to="/wall" className={({isActive}) => isActive ? "hide" : ""} id="wall-link">Wall</NavLink>
               </section> : <></>
         }
         <section id="logout">
            {token ? <p>Logout link</p> : <p></p>}
         </section>
      </header>
   )
}

export default Navbar;