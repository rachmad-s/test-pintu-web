export const getCurrencies = () =>
  fetch("/v2/wallet/supportedCurrencies").then(
    (response) => response.json()
  );

export const getPriceChanges = () =>
  fetch("/v2/trade/price-changes").then((response) => {
    return response.json();
  });