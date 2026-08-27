import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "./AuthContext";

const Register = () => {
   const [error, setError] = useState('');
   const {register} = useAuth();
   const navigate = useNavigate();

   return (
      <>
         <h1>Register</h1>
         <form action="">
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
               <input type="text" name="password" required/>
            </label>
            <label>
               Re-enter Password:
               <input type="text" name="verify-password" required />
            </label>
            <button>Register</button>
            {error && <p className="error">{error}</p>}
         </form>
      </>
   )

}

export default Register;