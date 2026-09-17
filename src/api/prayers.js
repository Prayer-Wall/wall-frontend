const API = import.meta.env.VITE_API_URL;

export const getPrayers = async (token) => {
   const response = await fetch(API + "/prayers", {
      method: "GET",
      headers: {Authorization: "Bearer " + token}
   })
   const prayers = await response.json();
   return prayers;
};

export const getPrayerById = async (token, id) => {
   const response = await fetch(API + "/prayers/" + id, {
      method: "GET",
      headers: {Authorization: "Bearer " + token}
   })

   const prayer = await response.json();
   return prayer.prayer;
}

export const addPrayer = async (token, prayer) => {
   const response = await fetch(API + "/prayers/add", {
      method: "POST",
      headers: {
         Authorization: "Bearer " + token,
      },
      body: prayer
   });

   const result = await response.json();
   if (!response.ok) {
      throw new Error(result.message)
   }
   return result;
};

export const editPrayer = async(token, prayer, id) => {
   const response = await fetch(API + "/prayers/" + id, {
      method: "PUT",
      headers: {
         Authorization: "Bearer " + token,
      },
      body: prayer
   });

   const result = await response.json();
   if (!response.ok) {
      throw new Error(result.message)
   }
   return result;
}

export const deletePrayer = async(token, id) => {
   const response = await fetch(API + "/prayers/" + id, {
      method: "DELETE",
      headers: {
         Authorization: "Bearer " + token,
         "Content-Type": "application/json"
      }
   });

   const result = await response.json();
   if (!response.ok) {
      throw new Error(result.message)
   };
   return result
}