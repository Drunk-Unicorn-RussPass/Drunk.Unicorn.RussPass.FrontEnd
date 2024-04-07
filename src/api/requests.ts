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

export const checkIn = (
  fileSrc: ImgSrcType,
  fileName: string,
  locationId: number,
) => {
  const formData = new FormData();
  formData.append('fileSrc', String(fileSrc));
  formData.append('fileName', fileName);
  formData.append('locationId', String(locationId));

  return fetcher.post('checkIn', {
    body: formData,
  });
};
