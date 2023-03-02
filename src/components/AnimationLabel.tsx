import { useEffect, useState } from "react";

export const AnimationLabel: React.FC<{
  children: JSX.Element | string;
  changes: string | undefined;
}> = ({ children, changes }) => {
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    if (changes && changes !== "equal") {
      setAnimation("animate-" + changes);
    }
    const animationTimeout = setTimeout(() => {
      setAnimation("");
    }, 1000);

    return () => clearTimeout(animationTimeout);
  }, [changes]);

  return <div className={"font-bold " + animation}>{children}</div>;
};
