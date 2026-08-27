import { Children, createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
   const [token, setToken] = useState('');

   const API = import.meta.env.VITE_API_URL;

   const register = async (credentials) => {
      const response = await fetch(API + '/users/register', {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(credentials)
      });

      const result = await response.json();
      console.log(result)
      if (!response.ok) {
         throw new Error(result.message)
      }
      console.log(result);
      setToken(result.token)
   }

   const login = async (credentials) => {
      const response = await fetch(API + '/users/login', {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(credentials)
      });

      const result = await response.json();
      if (!response.ok) {
         throw new Error(result.message)
      }
      setToken(result.token)
      console.log(result);
   }  

   const logout = () => {setToken('')};

   const value = {token, register, login, logout};

   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
   const context = useContext(AuthContext);
   if (!context) {
      throw new Error("Must have access to Auth")
   };

   return context;
}