import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";

export const PercentageLabel = ({ n }: { n: string }) => {
  const isPositive = Math.sign(Number(n)) > 0;
  return (
    <div className={`font-bold ${isPositive ? "text-green" : "text-red"}`}>
      {n ? (
        isPositive ? (
          <div className="flex items-center gap-1">
            <BsCaretUpFill /> {n} %
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <BsCaretDownFill /> {n} %
          </div>
        )
      ) : (
        ""
      )}
    </div>
  );
};
