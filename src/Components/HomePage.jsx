
import { useEffect, useState } from 'react';
import supabase from '../supabaseclient';
import '../../assets/Homepage.scss';

export default function HomePage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      const { data, error } = await supabase
        .from('creators') 
        .select('*');
      if (error) {
        setError(error.message);
      } else {
        setUsers(data);
      }
      setLoading(false);
    }
    fetchUsers();
  }, []);

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="homepage-container">
      <h1>All Content Creators</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> {/* Adjust field names as needed */}
              <br />
              {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
