export interface Wallet {
  currencyGroup: string;
  tokenSymbol: string;
  decimal_point: number;
  tokenType: string;
  blockchain: string;
  explorer: string;
  listingDate: Date;
  blockchainName: string;
  logo: string;
}

export interface SupportedCurencyPayload {
  currencyGroup: string;
  color: string;
  currencySymbol: string;
  name: string;
  logo: string;
  decimal_point: number;
  listingDate: Date;
  wallets: Wallet[];
}

export interface RootObject {
  code: string;
  message: string;
  payload: SupportedCurencyPayload[];
}
