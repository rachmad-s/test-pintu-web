export const API = {
  getCurrencies() {
    return fetch("/v2/wallet/supportedCurrencies").then((res) => res.json());
  },
  getPriceChanges() {
    return fetch("/v2/trade/price-changes").then((res) => res.json());
  },
};

export const getPriceChangesRes = {
  code: "success",
  message: "",
  payload: [
    {
      pair: "algo/idr",
      latestPrice: "3791",
      day: "-1.97",
      week: "-10.84",
      month: "0.48",
      year: "-67.03",
    },
  ],
};

export const getCurrenciesRes = {
  code: "success",
  message: "",
  payload: [
    {
      currencyGroup: "IDR",
      color: "#0A68F4",
      currencySymbol: "Rp",
      name: "Rupiah Token",
      logo: "https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_IDRT.svg",
      decimal_point: 0,
      listingDate: "2020-03-11T15:13:52.000Z",
      wallets: [
        {
          currencyGroup: "IDR",
          tokenSymbol: "IDRT",
          decimal_point: 2,
          tokenType: "ERC-20",
          blockchain: "Ethereum",
          explorer: "https://etherscan.io/tx/",
          listingDate: "2020-09-15T09:43:42.000Z",
          blockchainName: "Ethereum",
          logo: "https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/ERC-20.svg",
        },
      ],
    },
  ],
};
