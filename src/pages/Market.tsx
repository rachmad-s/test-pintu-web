import { useContext } from "react";
import CurrencyContext from "../contexts/CurrencyContext";
const Market = () => {
  const { isLoading, error, data } = useContext(CurrencyContext);

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>error</p>

  return data ? data.map((d:any) => (
    <div key={d.currencyGroup} className="flex gap-2">
        <div>{d.name}</div>
        {d.latestPrice && <div>{d.latestPrice}</div>}
        {d.comparison && <div>{d.comparison}</div>}
    </div>
  )) : ""
};

export default Market;
