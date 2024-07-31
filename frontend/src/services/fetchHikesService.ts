import { hikes } from '../static/hikes';

export const fetchHikes = async () => {
  try {
    // Simulate fetching data from an API
    // Normally, you'd use the actual API endpoint:
    // const response = await fetch('API_ENDPOINT');
    // const data = await response.json();

    // For testing, return the local hikes data
    return hikes;
  } catch (error) {
    console.error('Error fetching hikes:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};