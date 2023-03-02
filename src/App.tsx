import CurrencyContext from "./contexts/CurrencyContext";

import Market from "./pages/Market";
import useTokenList from "./hooks/TokenList";

function App() {
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

export default App;
