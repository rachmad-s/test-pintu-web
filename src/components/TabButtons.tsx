import { BsLayersHalf, BsArrowLeftRight, BsBarChartLine } from "react-icons/bs";
import { HiOutlineSparkles, HiOutlineDatabase } from "react-icons/hi";
import { MdOutlineAccountBalance } from "react-icons/md";
import { IoLogoGameControllerA } from "react-icons/io";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { VscLaw } from "react-icons/vsc";

const TAB_BUTTONS = [
  {
    name: "terbaru",
    label: "Terbaru",
    icon: <HiOutlineSparkles />,
  },
  {
    name: "defi",
    label: "DeFi",
    icon: <MdOutlineAccountBalance />,
  },
  {
    name: "nft",
    label: "NFT/Gaming",
    icon: <IoLogoGameControllerA />,
  },
  {
    name: "cex",
    label: "CEX",
    icon: <BsBarChartLine />,
  },
  {
    name: "dex",
    label: "DEX",
    icon: <BsArrowLeftRight />,
  },
  {
    name: "layer_1",
    label: "Layer-1",
    icon: <BsLayersHalf />,
  },
  {
    name: "infrastructure",
    label: "Infrastructure",
    icon: <HiOutlineDatabase />,
  },
  {
    name: "lending",
    label: "Lending",
    icon: <RiMoneyDollarCircleLine />,
  },
  {
    name: "layer_2",
    label: "Layer-2",
    icon: <BsLayersHalf />,
  },
  {
    name: "stablecoin",
    label: "Ekosistem Stablecoin",
    icon: <VscLaw />,
  },
];

export const TabButtons = () => {
  return (
    <div className="flex px-4 sm:px-0 nowrap overflow-x-auto gap-3 pb-3">
      {TAB_BUTTONS.map((button) => (
        <button
          key={button.name}
          className="flex bg-blue/10 text-blue text-sm items-center gap-1 rounded-lg p-2 px-4 whitespace-nowrap"
        >
          {button.icon}
          {button.label}
        </button>
      ))}
    </div>
  );
};
