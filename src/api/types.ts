export enum ProcessTrackStatus {
  none = 0,
  inWay = 1,
  passed = 2,
}

export type ProcessTrack = {
  trackId: number;
  passedCoins: number;
  passedSecrets: number;
  countPassedLocations: number;
  steps: number;
  kk: number;
  processStatus: ProcessTrackStatus;
};

export type RoutePointType = {
  name: string;
  address: string;
  category: string;
  image: string;
  isSecret?: boolean;
  reward: number;
};

export type ProcessLocationType = RoutePointType & {
  id: number;
  isVisible: boolean;
};

export enum LocationProcessStatuses {
  passed = 1,
  verificationProcess = 20,
  inWay = 50,
  none = 100,
}

export type LocationProcessType = ProcessLocationType & {
  id: number;
  isVisible: boolean;
  order: number;
  processStatus: LocationProcessStatuses;
};
