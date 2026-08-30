const API = import.meta.env.VITE_API_URL;

export const getPrayers = async (token) => {
   const response = await fetch(API + "/prayers", {
      method: "GET",
      headers: {Authorization: "Bearer " + token}
   })
   const prayers = await response.json();
   return prayers;
}

export const addPrayer = async (token, prayer) => {
   const response = await fetch(API + "/prayers/add", {
      method: "POST",
      headers: {
         Authorization: "Bearer " + token,
         "Content-Type": "application/json"
      },
      body: JSON.stringify(prayer)
   });

   const result = await response.json();
   if (!response.ok) {
      throw new Error(response.message)
   }
   return result;
}