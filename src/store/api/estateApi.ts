const API_URL = "https://bayut.p.rapidapi.com/properties/list";
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchEstates = async () => {
  try {
    const response = await fetch(`${API_URL}?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=12`, {
      method: "GET",
      headers: {
        "X-RapidApi-Key": API_KEY,
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    });

    if (!response.ok) {
      throw new Error("Error loading data");
    }

    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error("Request error:", error);
    return [];
  }
};
