import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "./AuthContext";
import "./auth.css"

const Register = () => {
   const [error, setError] = useState('');
   const {register} = useAuth();
   const navigate = useNavigate();

   const tryRegister = async (formData) => {
      try {
         setError(null);
   
         const name = formData.get("firstname");
         const username = formData.get("username");
         const password = formData.get("password");
   
         await register({name, username, password});
         navigate("/wall")
      } catch (e) {
         setError(e.message)
      }
   }

   return (
      <section id="register">
         <h1>Register</h1>
         <form id="register-form" action={tryRegister}>
            <label>
               First Name:
               <input type="text" name="firstname" required/>
            </label>
            <label>
               Username:
               <input type="text" name="username" required/>
            </label>
            <label>
               Password:
               <input type="password" name="password" required/>
            </label>
            <label>
               Re-enter Password:
               <input type="password" name="verify-password" required />
            </label>
            <button>Register</button>
            {error && <p className="error">{error}</p>}
            <Link to="/login">Login</Link>
         </form>
      </section>
   )

}

export default Register;