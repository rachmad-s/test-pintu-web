interface ButtonProps {
  children: JSX.Element[] | JSX.Element | string;
  color?: string;
  bgColor?: string;
  icon?: JSX.Element;
}

export const Button = ({
  children,
  color = "white",
  bgColor = "blue",
  icon,
}: ButtonProps) => {
  return (
    <button
      className={`flex bg-${bgColor} text-${color} text-sm items-center gap-1 rounded-lg p-2 px-4 whitespace-nowrap`}
    >
      {icon && icon}
      {children}
    </button>
  );
};
