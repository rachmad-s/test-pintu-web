import { TokenListPayload, Filter, TokenList } from "./../definitions";

/** CONSTANTS */
export const INIT_FILTER = {
  sortBy: "",
  sortDirection: "asc",
  search: "",
};

export const LOADING_DATA = Array(10)
  .fill("")
  .map((_, i) => ({
    currencyGroup: "",
    color: "",
    currencySymbol: i,
    name: "",
    logo: "",
    decimal_point: "",
    listingDate: "",
    wallets: [],
    pair: "",
    latestPrice: "",
    day: "",
    week: "",
    month: "",
    year: "",
  }));

/** FUNCTIONS */

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

/**
 * get rupiah format
 * @param n String | number
 * @returns String
 */
export const rupiahFormat = (n: string | number) =>
  n ? "Rp " + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "";

/**
 * sorting array of string
 * @param a Array value
 * @param b Array value
 * @param key Object key
 * @returns Array
 */
export const stringSort = (
  a: TokenListPayload,
  b: TokenListPayload,
  key: string
) => {
  const first = a[key as keyof TokenListPayload] || 0;
  const second = b[key as keyof TokenListPayload] || 0;
  if (first < second) return -1;
  if (first > second) return 1;
  return 0;
};

/**
 * sorting array of number
 * @param a Array value
 * @param b Array value
 * @param key Object key
 * @returns Array
 */
export const numberSort = (
  a: TokenListPayload,
  b: TokenListPayload,
  key: string
) => {
  const first = Number(a[key as keyof TokenListPayload]) || 0;
  const second = Number(b[key as keyof TokenListPayload]) || 0;

  return first - second;
};

/**
 * get if string is convertible to number
 * @param value String
 * @returns Boolean
 */
export const isNumber = (value: any) => {
  if (typeof value === "string") {
    return !isNaN(Number(value));
  }
};

/**
 * get specific width if screen is more than 768px
 * @param w String
 * @returns string
 */
export const responsiveWidth = (w: string) =>
  window.innerWidth > 768 ? w : "auto";

/**
 * Modify list based on filter
 * @param filter Current filter state
 * @param listArray Lists that will be filtered
 * @returns Array of objects
 */
export const applyFilter = (filter: Filter, listArray: TokenList) => {
  let list = [...listArray];

  // Search List
  if (filter.search)
    list = list.filter((list) =>
      list.name.toLowerCase().includes(filter.search.toLowerCase())
    );

  // Sorting Ascending
  if (filter.sortBy && filter.sortDirection === "asc") {
    if (isNumber(list[0][filter.sortBy as keyof TokenListPayload]))
      list.sort((a, b) => numberSort(a, b, filter.sortBy));
    else list.sort((a, b) => stringSort(a, b, filter.sortBy));
  }

  // Sorting Descending
  if (filter.sortBy && filter.sortDirection === "desc") {
    if (isNumber(list[0][filter.sortBy as keyof TokenListPayload]))
      list.sort((a, b) => numberSort(b, a, filter.sortBy));
    else list.sort((a, b) => stringSort(b, a, filter.sortBy));
  }

  return list;
};
