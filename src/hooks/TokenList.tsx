import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { getCurrencies, getPriceChanges } from "../helper/api";
import { connectCurrency } from "../helper";
import {
  SupportedCurencyPayload,
  TokenList,
  TokenListPayload,
  PriceChangesPayload,
} from "./../definitions";

const useTokenList = () => {
  const [data, setData] = useState<TokenList>([]);
  const currencies = useQuery("currencies", getCurrencies);
  const prices = useQuery("priceChanges", getPriceChanges, {
    refetchInterval: 5000,
  });

  const result = {
    isLoading: currencies.isLoading || prices.isLoading,
    error: currencies.error || prices.error,
    data,
  };

  const currencyData: [SupportedCurencyPayload?] = currencies?.data?.payload;
  const pricesData: [PriceChangesPayload?] = prices?.data?.payload;

  useEffect(() => {
    if (currencyData && pricesData) {
      const lists: TokenList = currencyData.map((list: any) => {
        const price = connectCurrency(pricesData, list);
        return price ? { ...list, ...price } : { ...list };
      });
      setData((prevState: TokenList) => {
        const getComparison = (list: TokenListPayload) =>
          connectCurrency(prevState, list)?.latestPrice
            ? connectCurrency(prevState, list)?.latestPrice === list.latestPrice
              ? "equal"
              : connectCurrency(prevState, list)?.latestPrice < list.latestPrice
              ? "up"
              : "down"
            : undefined;

        return lists.map((list: TokenListPayload) =>
          list.latestPrice ? { ...list, comparison: getComparison(list) } : list
        );
      });
    }
  }, [currencyData, pricesData]);

  return result;
};

export default useTokenList;
