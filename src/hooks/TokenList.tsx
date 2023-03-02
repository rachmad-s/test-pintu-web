import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { getCurrencies, getPriceChanges } from "../helper/api";
import { connectCurrency, applyFilter, INIT_FILTER } from "../helper";
import {
  SupportedCurencyPayload,
  TokenList,
  TokenListPayload,
  PriceChangesPayload,
  Filter,
} from "./../definitions";

const useTokenList = () => {
  const [data, setData] = useState<TokenList>([]);
  const [filter, setFilter] = useState<Filter>(INIT_FILTER);

  const currencies = useQuery("currencies", getCurrencies);
  const prices = useQuery("priceChanges", getPriceChanges, {
    refetchInterval: 1000,
  });

  const result = {
    isLoading: currencies.isLoading || prices.isLoading,
    error: currencies.error || prices.error,
    data,
    filter,
    setFilter,
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

        return applyFilter(
          filter,
          lists
            .map((list: TokenListPayload) =>
              list.latestPrice
                ? { ...list, comparison: getComparison(list) }
                : list
            )
            .filter((list) => list.currencyGroup !== "IDR")
        );
      });
    }
  }, [currencyData, pricesData, filter]);

  return result;
};

export default useTokenList;
