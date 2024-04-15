export type ReelState = {
  data: Array<ReelStateType>;
  isPaused: boolean;
};

export type ReelStateType = {
  id: number;
  backgroundColor: string;
  video: string;
  isVertical?: boolean;
};
