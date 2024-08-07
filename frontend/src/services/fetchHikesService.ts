// Define the Hike interface
export interface Hike {
  id: number;
  name: string;
  location: string;
  distance: string;
  elevation: string;
  description: string;
}

// Assuming the base URL of your Django API is http://localhost:8000
const BASE_URL = "http://localhost:8000/api"; // Adjust as necessary

// Fetch hikes data from Django backend
export const fetchHikes = async (): Promise<Hike[]> => {
  try {
    const response = await fetch(`${BASE_URL}/hikes/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch hikes");
    }

    const data = await response.json();
    const return_data: Hike[] = data.hikes;
    return return_data;
  } catch (error) {
    console.error("Error fetching hikes:", error);
    throw error;
  }
};
