import axios from "axios";

// Definition of global constants for query parameters
const BASE_URL = "https://api.github.com/search/users?q=";
const LOCATION = "location";

// Function to fetch users with advanced search
export const fetchUserData = async (username, location = "", minRepos = "") => {
  try {
    // Construct query string for advanced search
    let query = username;
    if (location) {
      query += `+${LOCATION}:${location}`;
    }
    if (minRepos) {
      query += `+repos:>${minRepos}`;
    }

    // Complete URL for API request
    const url = `${BASE_URL}${query}`;

    const response = await axios.get(url);
    return response.data.items; // return array of users
  } catch (error) {
    console.error("Error fetching users:", error);