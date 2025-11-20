import axios from "axios";

// Function to fetch users based on advanced search criteria
export const fetchUserData = async (username, location = "", minRepos = "") => {
  try {
    // Build search query for GitHub API
    let query = username;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items; // GitHub search API returns items array
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};