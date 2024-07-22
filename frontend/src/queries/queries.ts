import { gql } from '@apollo/client';

export const GET_PERSONS = gql`
  query GetPersons {
    allPersons {
      id
      name
      age
      city
    }
  }
`;