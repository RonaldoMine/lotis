import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

type Props = {
  children?: ReactNode;
};

const FormLayout = (props:Props) => {
  return <div
  className="w-[30rem] mx-auto py-36"
  >
    {props.children ?? <Outlet/>}
  </div>;
};

export default FormLayout;

