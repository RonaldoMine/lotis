import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Divider from "../components/Divider";
import TextInput from "../components/TextInput";
import { useAuthStore } from "../stores/authStore/authStore";

// type Props = {};

export default function Login() {
  //state
  const [signIn, setSignIn] = useState({ email: "", password: "" });

  const login = useAuthStore((state) => state.login);
  const auth = useAuthStore((state) => state.auth);
  // const resetErrors = useAuthStore((state) => state.resetErrors);

  // useEffect(() => {
  //   auth.errors != null ? console.log('Error '+auth.errors) : console.log(auth.currentUser);
  //   return () => {
  //     resetErrors();
  //   };
  // }, [auth]);
  useEffect(() => {
    auth.currentUser !== null ? console.log('d') : console.log('d')
  }, [auth])

  //function
  const handleSubmit = () => {
    login(signIn.email, signIn.password);
  };

  return (
    <>
      <h1 className="text-6xl font-sequelBold">Login</h1>
      <Divider />
      <div className="mt-10">
        <TextInput
          label="Email"
          type="email"
          required
          placeholder="Enter an email"
          value={signIn.email}
          onChange={(e) => setSignIn({ ...signIn, email: e.target.value })}
        />
        <br />
        <TextInput
          label="Password"
          type="password"
          required
          placeholder="Enter a password"
          value={signIn.password}
          onChange={(e) => setSignIn({ ...signIn, password: e.target.value })}
        />
        <br />
        <Button onClick={handleSubmit}>Submit</Button>
        <p className="mt-6">
          Don't have an account ? Sign up{" "}
          <Link className="underline font-medium" to={"/auth/signup"}>
            here
          </Link>
        </p>
      </div>
    </>
  );
}
