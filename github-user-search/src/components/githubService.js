import axios from "axios";

// Function to fetch users with advanced search
export const fetchUserData = async (username, location = "", minRepos = "") => {
  try {
    // Construct query string
    let query = "";
    if (username) query += `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    // GitHub Search API endpoint
    const url = `https://api.github.com/search/users?q=${query}`;

    const response = await axios.get(url);
    return response.data.items; // return array of users
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};