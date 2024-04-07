import { fetcher } from '@/api/api';
import { LocationProcessType, ProcessTrack } from '@/api/types';

export const getProcessTrack = async (id: number | string) => {
  return fetcher.get<ProcessTrack>(`Progress/track?id=${id}`);
};

export const getProcessLocationsByTrackId = async (
  trackId: number | string,
) => {
  return fetcher.get<LocationProcessType[]>(
    `Progress/locations?trackId=${trackId}`,
  );
};
