import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate, Link } from "react-router";

const Login = () => {
   const [error, setError] = useState('');
   const {login} = useAuth();
   const navigate = useNavigate();

   const tryLogin = async (formData) => {
      try {
         setError(null);
   
         const username = formData.get("username");
         const password = formData.get("password");
   
         await login({username, password});
         navigate("/")
      } catch (e) {
         setError(e.message)
      }
   }

   return (
      <section>
         <h1>Login</h1>
         <form action={tryLogin}>
            <label>
               Username:
               <input type="text" name="username" required />
            </label>
            <label>
               Password:
               <input type="password" name="password" required />
            </label>
            <button>Login</button>
            {error && <p className="error">{error}</p>}
            <Link to="/register">Register</Link>
         </form>
      </section>
   )
}

export default Login;