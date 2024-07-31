import React from 'react';

interface HikeInfoProps {
  location: string;
  distance: string;
  elevation: string;
  description: string;
}

const HikeInfo: React.FC<HikeInfoProps> = ({ location, distance, elevation, description }) => {
  return (
    <div className=" ">
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Distance:</strong> {distance}</p>
      <p><strong>Elevation Gain:</strong> {elevation}</p>
      <p><strong>Description:</strong> {description}</p>
    </div>
  );
};

export default HikeInfo;