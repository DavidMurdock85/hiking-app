import React from "react";
import HikeInfo from "./HikeInfo";

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
  return (
    <>
      <li>
        <div className="border">
          <h2>{hike.name}</h2>
          <HikeInfo
            location={hike.location}
            distance={hike.distance}
            elevation={hike.elevation}
            description={hike.description}
          />
        </div>
      </li>
    </>
  );
};

export default Hike;
