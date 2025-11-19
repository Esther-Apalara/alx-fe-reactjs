import axios from "axios";

// Function to fetch GitHub user data
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // return user info
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    throw error; // so Search component can handle it
  }
};