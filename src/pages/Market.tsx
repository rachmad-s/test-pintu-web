import { useContext } from "react";
import { BsSearch } from "react-icons/bs";

import CurrencyContext from "../contexts/CurrencyContext";
import { Filter, TokenListPayload } from "./../definitions";
import {
  Table,
  AnimationLabel,
  PercentageLabel,
  CurrencyLogo,
  TabButtons,
} from "../components";
import { rupiahFormat, responsiveWidth } from "../helper";

const Market = () => {
  const { isLoading, error, data, setFilter, filter } =
    useContext(CurrencyContext);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  const tableRow = [
    {
      key: "name",
      label: "Crypto",
      width: responsiveWidth("400"),
      component: (d: TokenListPayload) => (
        <div className="font-bold flex items-center gap-4">
          <CurrencyLogo
            dataSrc={d.logo + "?not-from-cache-please"}
            color={d.color}
          />
          {d.name}
        </div>
      ),
    },
    {
      key: "currencySymbol",
      label: "",
      width: responsiveWidth("200"),
      component: (d: TokenListPayload) => (
        <div className="text-gray-dark font-normal">{d.currencyGroup}</div>
      ),
    },
    {
      key: "latestPrice",
      label: "Harga",
      width: responsiveWidth("250"),
      component: (d: TokenListPayload) => (
        <AnimationLabel changes={d.comparison}>
          {rupiahFormat(d.latestPrice)}
        </AnimationLabel>
      ),
    },
    {
      key: "day",
      label: "24 Jam",
      className: "text-center",
      component: (d: TokenListPayload) => <PercentageLabel n={d.day} />,
    },
    {
      key: "week",
      label: "1 Mgg",
      className: "text-center",
      component: (d: TokenListPayload) => <PercentageLabel n={d.week} />,
    },
    {
      key: "month",
      label: "1 Bln",
      className: "text-center",
      component: (d: TokenListPayload) => <PercentageLabel n={d.month} />,
    },
    {
      key: "year",
      label: "1 Thn",
      className: "text-center",
      component: (d: TokenListPayload) => <PercentageLabel n={d.year} />,
    },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((s: Filter) => ({
      ...s,
      search: e.target.value,
    }));
  };

  const handleSort = (key: string) => {
    setFilter((s: Filter) => ({
      ...s,
      sortBy: s.sortDirection === "desc" ? "" : key,
      sortDirection: s.sortBy && s.sortDirection === "asc" ? "desc" : "asc",
    }));
  };

  return data ? (
    <>
      <div className="flex justify-between items-start mb-10">
        <h1 className="text-3xl font-bold">
          Harga Crypto dalam Rupiah Hari ini
        </h1>
        <div className="flex">
          <span className="p-2 px-3 border-t border-b border-l border-gray bg-gray/60 rounded-tl-lg rounded-bl-lg">
            <BsSearch className="text-gray-dark mt-1" />
          </span>
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Cari aset di Pintu"
            className="bg-transparent w-80 border-t border-b border-r border-gray bg-gray/60 rounded-tr-lg rounded-br-lg p-2 focus:outline-none"
          />
        </div>
      </div>
      <TabButtons />
      <Table
        tableRow={tableRow}
        data={data}
        dataKey={"currencySymbol"}
        filter={filter}
        handleSort={(key: string) => handleSort(key)}
      />
    </>
  ) : (
    <></>
  );
};

export default Market;
