let host = "";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "production") {
  host = "https://cors-anywhere.herokuapp.com/http://api.pintu.co.id";
}

export const getCurrencies = () =>
  fetch(host + "/v2/wallet/supportedCurrencies").then((response) =>
    response.json()
  );

export const getPriceChanges = () =>
  fetch(host + "/v2/trade/price-changes").then((response) => {
    return response.json();
  });
