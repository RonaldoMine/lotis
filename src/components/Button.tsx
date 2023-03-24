import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: string;
};

const Button = (props: ButtonProps) => {


  return <button {...props} className="rounded-full py-3 px-6 max-w-max font-sequelLight bg-neutral-800 text-white">{props.children}</button>;
};

export default Button;