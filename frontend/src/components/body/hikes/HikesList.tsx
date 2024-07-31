import React, { useState, useEffect } from 'react';
import Hike from './Hike';
import { fetchHikes } from '../../../services/fetchHikesService';

const HikesList: React.FC = () => {
  const [hikeList, setHikeList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadHikes = async () => {
      setLoading(true);
      try {
        const data = await fetchHikes();
        setHikeList(data);
      } catch (error) {
        console.error('Error fetching hikes:', error);
      } finally {
        setLoading(false);
      }
    };

    loadHikes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul className='flex flex-wrap'>
      {hikeList.map(hike => (
        <Hike key={hike.id} hike={hike} />
      ))}
      </ul>
    </>
  );
};

export default HikesList;