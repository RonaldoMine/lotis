import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

type Props = {
  children?: ReactNode;
};

const EditLayout = (props: Props) => {
  return (
    <main className="max-w-[40rem] py-12 px-8 sm:px-4 mx-auto">
      {props.children ?? <Outlet />}
    </main>
  );
};

export default EditLayout;
