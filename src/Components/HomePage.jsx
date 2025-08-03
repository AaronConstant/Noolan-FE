
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
        <ul className="user-list">
          {users.map(user => (
            <li key={user.id} className="user-card">
              <img 
                src={user.imageUrl} 
                alt={user.name + ' profile'} 
                className="user-image"
                style={{ width: '80px', height: '80px', borderRadius: '50%' }}
              />
              <div className="user-info">
                <strong>{user.name}</strong>
                <p>{user.description}</p>
                <a href={user.profileUrl} target="_blank" rel="noopener noreferrer">
                  <span role="img" aria-label="profile">🔗</span> Personal Page
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
