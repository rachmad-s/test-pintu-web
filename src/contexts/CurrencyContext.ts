import React, { createContext } from "react";

const CurrencyContext = createContext<{isLoading: boolean; error: unknown; data: undefined | any}>({
    isLoading: true,
    error: false,
    data: undefined
})

export default CurrencyContext;
