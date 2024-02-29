import axios from "axios";
const SearchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID VjnjhzVA6xFlJCljaUdUfjTL8yBAyU5MUtYDlkUODJg",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default SearchImages;
