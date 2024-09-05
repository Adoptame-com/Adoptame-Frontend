import React, { ReactNode } from "react";

type props = {
  children: ReactNode;
  onClick:
    | (() => void)
    | (() => Promise<void>)
    | ((prevState: any) => React.SetStateAction<any>);
  padding: "py-4 px-5" | "p-2";
  color?: "bg-primary" | "bg-danger";
  outline?: boolean;
};
const Button = ({
  children,
  onClick,
  padding,
  color = "bg-primary",
  outline = false,
}: props) => {
  const colorResolverClass = `${
    !outline
      ? `flex w-full ${padding} ${color} rounded-2xl justify-center items-center`
      : `flex w-full ${padding} bg-white border-2 border-primary rounded-2xl justify-center items-center`
  }`;

  return (
    <button onClick={onClick} className={`${colorResolverClass}`}>
      {children}
    </button>
  );
};

export default Button;
