import { useState } from "react";
import { searchUsers } from "../services/githubService"; // advanced search function

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]); // array for multiple users
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await searchUsers({ username, location, minRepos });
      if (data.length === 0) {
        setError("Looks like we can't find any users");
      }
      setUsers(data);
    } catch {
      setError("Looks like we can't find any users");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="mb-4 flex flex-wrap gap-2">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow">
            <img
              src={user.avatar_url}
              alt={user.login}
              width={100}
              className="rounded-full mb-2"
            />
            <h2 className="font-semibold">{user.login}</h2>
            {user.location && <p>Location: {user.location}</p>}
            {user.public_repos !== undefined && <p>Repos: {user.public_repos}</p>}
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;