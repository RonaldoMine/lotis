import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Divider from "../components/Divider";
import TextInput from "../components/TextInput";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/axios/axios";

// type Props = {};

export default function Login() {
  //state
  const [userInfos, setuserInfos] = useState({ email: "", password: "" });

  const { signIn } = useAuth();

  const navigate = useNavigate();

  // const login = useAuthStore((state) => state.login);
  // const auth = useAuthStore((state) => state.auth);
  // const resetErrors = useAuthStore((state) => state.resetErrors);

  // useEffect(() => {
  //   auth.errors != null ? console.log('Error '+auth.errors) : console.log(auth.currentUser);
  //   return () => {
  //     resetErrors();
  //   };
  // }, [auth]);
  // useEffect(() => {
  //   auth.currentUser !== null ? console.log('d') : console.log('d')
  // }, [auth])

  //function
  const handleSubmit = async () => {
    try {
      const user = await toast.promise(
        axios.post(BASE_URL + "auth/login", {
          email: userInfos.email,
          password: userInfos.password,
        }),
        {
          pending: "Loading...",
          success: "Successfully authenticated👌",
          error: "An error occured 🤯",
        },
        {
          pauseOnFocusLoss: false,
        }
      );
      const {
        first_name,
        last_name,
        role_id,
        token,
        cni_number,
        commercial_register_number,
      } = user.data?.user;
      signIn({
        email: userInfos.email,
        token,
        firstName: first_name,
        lastName: last_name,
        role: role_id,
        cniNumber: cni_number,
        commercialRegisterNumber: commercial_register_number,
      });

      navigate("/lands", {
        replace: true,
      });
    } catch (error) {
      console.log("Error", error);
    }
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
          value={userInfos.email}
          onChange={(e) =>
            setuserInfos({ ...userInfos, email: e.target.value })
          }
        />
        <br />
        <TextInput
          label="Password"
          type="password"
          required
          placeholder="Enter a password"
          value={userInfos.password}
          onChange={(e) =>
            setuserInfos({ ...userInfos, password: e.target.value })
          }
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
