import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate, Link } from "react-router";

const Login = () => {
   const [error, setError] = useState('');
   const {login} = useAuth();
   const navigate = useNavigate();

   return (
      <section>
         <h1>Login</h1>
         <form action="">
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