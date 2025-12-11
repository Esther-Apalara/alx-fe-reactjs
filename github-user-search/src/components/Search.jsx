import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const results = await fetchUserData(username, location, minRepos);

    if (!Array.isArray(results) || results.length === 0) {
      setUsers([]);
      setError("No users found.");
    } else {
      setUsers(results);
    }

    setLoading(false);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="grid gap-2 mb-4">
        <input
          type="text"
          placeholder="Username…"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Location…"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Min Repos…"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded"
        />

        <button className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading…</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid md:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow">
            <img
              src={user.avatar_url}
              alt=""
              className="rounded-full w-20 h-20"
            />
            <h2 className="font-bold">{user.login}</h2>
            <p>Repos: {user.public_repos}</p>
            <a className="text-blue-500" href={user.html_url} target="_blank">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;