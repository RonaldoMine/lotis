import { Link } from "react-router-dom";

type Props = {};

const Missing = (props: Props) => {
  return <div>
    <p>404 Error</p>
    <Link to={"/lands"}>Back to Home</Link>
  </div>;
};

export default Missing;
