import { Filter } from "../definitions";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";

interface TableRow {
  key: string;
  label: string;
  component: Function;
  width?: string;
  className?: string;
}

export const Table: React.FC<{
  tableRow: TableRow[];
  data: any;
  dataKey: string;
  handleSort?: Function;
  filter?: Filter;
  className?: string;
}> = ({ tableRow, data, dataKey, filter, handleSort, className }) => {
  return (
    <table
      cellSpacing="0"
      cellPadding="0"
      className={`table-auto border-separate ${className}`}
      data-testid="table-currency"
    >
      <thead>
        <tr>
          {tableRow.map((row) => (
            <th
              key={row.key}
              className="p-6 text-left border-gray border-b border-t first:pl-16 first:border-l lg:first:rounded-tl-xl last:border-r lg:last:rounded-tr-xl"
            >
              <button
                onClick={() => handleSort ? handleSort(row.key) : {}}
                className="flex w-full text-left"
              >
                <div
                  className={`font-bold uppercase flex justify-between w-full items-center ${
                    filter?.sortBy === row.key
                      ? "text-black/70"
                      : "text-gray-dark"
                  }`}
                >
                  {row.label}
                  {filter?.sortBy === row.key &&
                    (filter.sortDirection === "asc" ? (
                      <BsFillCaretUpFill />
                    ) : (
                      <BsFillCaretDownFill />
                    ))}
                </div>
              </button>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((d: any) => (
          <tr key={d[dataKey]}>
            {tableRow.map((row) => (
              <td
                key={`${d[dataKey]}-${row.key}`}
                width={row.width || "auto"}
                className={`${
                  row.className || ""
                } p-6 border-gray border-b first:border-l last:border-r whitespace-nowrap`}
              >
                {row.component(d)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
