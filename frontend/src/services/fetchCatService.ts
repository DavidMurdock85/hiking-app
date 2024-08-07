export const fetchCatImage = async (): Promise<string | null> => {
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "DEMO-API-KEY",
  });

  const requestOptions: RequestInit = {
    method: "GET",
    headers: headers,
    redirect: "follow" as RequestRedirect, // Correctly type the redirect property
  };

  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
      requestOptions
    );
    const data = await response.json();
    if (data && data[0] && data[0].url) {
      return data[0].url;
    }
    return null;
  } catch (error) {
    console.error("Error fetching cat image:", error);
    return null;
  }
};
