import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

// Function to fetch users from GitHub with advanced search
export const fetchUserData = async (username, location = "", minRepos = "") => {
  try {
    if (!username) return []; // Return empty array if username is blank

    let query = username;

    if (location.trim() !== "") {
      query += `+location:${location}`;
    }

    if (minRepos.trim() !== "") {
      query += `+repos:>${minRepos}`;
    }

    const url = `${BASE_URL}${query}`;

    console.log("Fetching URL:", url); // Debug URL

    const response = await axios.get(url);
    return response.data.items || []; // Ensure an array is returned
  } catch (error) {
    console.error("Error fetching users:", error);
    return []; // Return empty array on error
  }
};