import React from 'react';
import useFetch from './../hooks/useFetch';
import User from './../user/User';

const randomUserURL: string = 'https://randomuser.me/api?results=10';

const Users = () => {
  const { data, error, loading } = useFetch(randomUserURL);

  if (loading) return <span>Loading...</span>;
  if (error) return <span>'Something went wrong</span>;

  return (
    <div>
      <h1>Users</h1>
      {data ? (
        <ul>
          {data.results.map((user, i) => (
            <li key={i}>
              <User firstname={user.name.first} surname={user.name.last} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
};

export default Users;
