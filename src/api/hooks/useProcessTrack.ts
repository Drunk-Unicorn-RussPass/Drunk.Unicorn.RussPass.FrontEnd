import { useEffect, useState } from 'react';
import { ProcessTrack } from '@/api/types';
import { getProcessTrack } from '@/api/requests';

export const useProcessTrack = (id: string | number) => {
  const [data, setData] = useState<ProcessTrack>();

  const udpate = async () => {
    const res = await getProcessTrack(id);
    setData(res.data);
  };

  useEffect(() => {
    const loadData = async () => {
      const res = await getProcessTrack(id);

      setData(res.data);
    };

    loadData();
  }, [id]);

  return [data, udpate];
};
