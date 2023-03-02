import CurrencyContext from "./contexts/CurrencyContext";

import Market from "./pages/Market";
import useTokenList from "./hooks/TokenList";

function App() {
  const { isLoading, error, data } = useTokenList();
  return (
    <CurrencyContext.Provider
      value={{
        isLoading,
        error,
        data,
      }}
    >
      <Market />
    </CurrencyContext.Provider>
  );
}

export default App;
