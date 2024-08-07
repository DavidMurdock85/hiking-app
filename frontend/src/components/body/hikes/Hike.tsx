import React, { useState, useEffect } from "react";
import HikeInfo from "./HikeInfo";
import { fetchCatImage } from "../../../services/fetchCatService";

interface HikeProps {
  hike: {
    id: number;
    name: string;
    location: string;
    distance: string;
    elevation: string;
    description: string;
  };
}

const Hike: React.FC<HikeProps> = ({ hike }) => {
  const [catImageUrl, setCatImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const getCatImage = async () => {
      const imageUrl = await fetchCatImage();
      setCatImageUrl(imageUrl);
    };

    getCatImage();
  }, []);

  return (
    <li className="bg-slate-50 shadow-xl m-5 p-4 rounded-lg max-w-sm">
      <figure className="mb-4">
        {/* Display the fetched cat image */}
        {catImageUrl ? (
          <img
            src={catImageUrl}
            alt="Random Cat"
            className="w-full h-48 object-cover rounded-t-lg"
          />
        ) : (
          <p>Loading image...</p>
        )}
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-bold mb-2">{hike.name}</h2>
        <HikeInfo
          location={hike.location}
          distance={hike.distance}
          elevation={hike.elevation}
          description={hike.description}
        />
      </div>
    </li>
  );
};

export default Hike;