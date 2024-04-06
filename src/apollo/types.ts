export type RoutePointType = {
  id: number;
  name: string;
  address: string;
  category: string;
  image: string;
};

export type LocationType = RoutePointType & {
  isVisible: boolean;
  reward: number;
};

export enum LocationProcessStatuses {
  passed = 'passed',
  verificationProcess = 'verificationProcess',
  noPassed = 'noPassed',
  inWay = 'inWay',
}

export type LocationProcessType = LocationType & {
  order: number;
  processStatus: LocationProcessStatuses;
};
