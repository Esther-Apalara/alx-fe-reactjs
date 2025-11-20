import axios from "axios";

// Fetch a single user by username (previous task)
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Advanced search: username + location + minRepos
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    // Build the search query
    let query = "";
    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    // GitHub Search API endpoint
    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
    
    // response.data.items contains the array of users
    const users = response.data.items;

    // Fetch extra details for each user (like location & public_repos)
    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        const userDetails = await axios.get(user.url);
        return userDetails.data;
      })
    );

    return detailedUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};