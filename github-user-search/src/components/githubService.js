export async function fetchUserData(username, location, minRepos) {
  try {
    if (!username) return []; // must enter a username

    let query = username;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const url = `https://api.github.com/search/users?q=${encodeURIComponent(
      query
    )}&per_page=5`; // limit results

    const response = await fetch(url);

    if (!response.ok) {
      console.error("GitHub API error:", response.status);
      return [];
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) return [];

    // fetch full user details
    const detailedUsers = await Promise.all(
      data.items.map(async (user) => {
        const res = await fetch(user.url);
        return await res.json();
      })
    );

    return detailedUsers;
  } catch (err) {
    console.error("API Error:", err);
    return [];
  }
}