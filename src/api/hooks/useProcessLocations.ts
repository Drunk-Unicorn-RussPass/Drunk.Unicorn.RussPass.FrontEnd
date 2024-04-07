import { useEffect, useState } from 'react';
import { ProcessLocationType } from '@/api/types';
import { getProcessLocationsByTrackId } from '@/api/requests';

export const useProcessLocations = (trackId: string | number) => {
  const [data, setData] = useState<ProcessLocationType[]>();

  useEffect(() => {
    const loadData = async () => {
      const res = await getProcessLocationsByTrackId(trackId);
      setData(res.data);
    };
  }, [trackId]);

  const udate = async () => {
    const res = await getProcessLocationsByTrackId(trackId);
    setData(res.data);
  };

  return [data, udate];
};
