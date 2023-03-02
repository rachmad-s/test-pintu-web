import { createContext } from "react";
import { CurrencyContextInterface } from "../definitions";

const CurrencyContext = createContext<CurrencyContextInterface>({
  isLoading: true,
  error: false,
  data: undefined,
  filter: {
    sortBy: "",
    sortDirection: "asc",
    search: "",
  },
  setFilter: () => {},
});

export default CurrencyContext;
