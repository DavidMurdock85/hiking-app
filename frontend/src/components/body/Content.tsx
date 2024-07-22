import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PERSONS } from '../../queries/queries'; // Import your GraphQL queries

const Content: React.FC = () => {
  const { loading, error, data } = useQuery(GET_PERSONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Persons</h1>
      <ul>
        {data.allPersons.map((person: any) => (
          <li key={person.id}>
            {person.name}: {person.age}, {person.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;