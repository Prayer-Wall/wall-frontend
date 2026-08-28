const API = import.meta.env.VITE_API_URL;

export const getPrayers = async (token) => {
   const response = await fetch(API + "/prayers", {
      method: "GET",
      headers: {Authorization: "Bearer " + token}
   })
   const prayers = await response.json();
   console.log(prayers)
   return prayers;
}