/**
 * connect price data to related currency by its currency name/code
 * @param priceChanges Array of object
 * @param currency Object
 * @returns
 */
export const connectCurrency = (priceChanges: any, currency: any) =>
  priceChanges.find(
    (p: any) =>
      p.pair?.split("/")[0] === currency.currencyGroup.toLowerCase() || false
  );