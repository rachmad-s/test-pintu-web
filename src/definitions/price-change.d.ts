export interface PriceChangesPayload {
  pair: string;
  latestPrice: string;
  day: string;
  week: string;
  month: string;
  year: string;
}

export interface PriceChanges {
  code: string;
  message: string;
  payload: PriceChangesPayload[];
}
