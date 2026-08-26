import { Children, createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
   const [token, setToken] = useState('');

   const API = import.meta.env.VITE_API_URL;

   const register = async (credentials) => {
      const response = await fetch(API + 'users/register', {
         method: "POST",
         headers: {
            "Content-Type": "application"
         },
         body: JSON.stringify(credentials)
      });

      const result = await response.json();
      if (!response.ok) {
         throw new Error(result.message)
      }
      console.log(result);
      setToken(result.token)
   }

   const logout = () => {setToken('')};
}