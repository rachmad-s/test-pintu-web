import { SupportedCurencyPayload } from "./supported-currency";
import { PriceChangesPayload } from "./price-change";

export * from "./supported-currency";
export * from "./price-change";

export interface TokenListPayload
  extends SupportedCurencyPayload,
    PriceChangesPayload {
        comparison?: string
    }

export type TokenList = TokenListPayload[];

export interface Filter {
  sortBy: string;
  sortDirection: "asc" | "desc" | string;
  search: string;
}

export interface CurrencyContextInterface {
isLoading: boolean;
error: unknown;
data: TokenList | undefined;
filter: Filter,
setFilter: Function;
}

