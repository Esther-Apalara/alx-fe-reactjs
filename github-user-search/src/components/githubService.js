import axios from "axios";

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/search/users?q=${username}`);
  return response.data.items; // returns an array of users
};