import { QueryClient, QueryClientProvider } from "react-query";
import CurrencyContext from "./contexts/CurrencyContext";

import Market from "./pages/Market";
import useTokenList from "./hooks/TokenList";

const queryClient = new QueryClient();

function InnerApp() {
  const { isLoading, error, data, filter, setFilter } = useTokenList();
  return (
    <CurrencyContext.Provider
      value={{
        isLoading,
        error,
        data,
        filter,
        setFilter,
      }}
    >
      <Market />
    </CurrencyContext.Provider>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <InnerApp />
    </QueryClientProvider>
  );
}

export default App;
