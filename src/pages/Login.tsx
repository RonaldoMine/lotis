import { Link } from "react-router-dom";
import Button from "../components/Button";
import Divider from "../components/Divider";
import TextInput from "../components/TextInput";

// type Props = {};

export default function Login() {
  return (<>
    <h1 className="text-6xl font-sequelBold">Login</h1>
    <Divider/>
    <div className="mt-10">
        <TextInput label="Email" type="email" placeholder="Enter an email"/>
        <br />
        <TextInput label="Password" type="password" placeholder="Enter a password"/>
        <br />
        <Button>Submit</Button>
        <p className="mt-6">Don't have an account ? Sign up <Link className="underline font-medium" to={'/signup'}>here</Link></p>
    </div>
  </>);
}
