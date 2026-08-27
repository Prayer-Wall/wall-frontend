import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate, Link } from "react-router";

const Login = () => {
   const [error, setError] = useState('');
   const {login} = useAuth();
   const navigate = useNavigate();

   return (
      <>
         <h1>Login</h1>
      </>
   )
}

export default Login;