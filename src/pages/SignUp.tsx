import React from "react";
import Divider from "../components/Divider";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { useAuthStore } from "../stores/authStore/authStore";

type Props = {};

const SignUp = (props: Props) => {

  const signUp = useAuthStore(state => state.signUp);
  // const auth = useAuthStore(state => state.auth);
  // const resetErrors = useAuthStore(state => state.resetErrors);

  // useEffect(() => {
    
  //   auth.errors ? console.log(auth.errors) : console.log('Good');

  //   return () => {
  //     resetErrors();
  //   };
  // }, [auth]);
  

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      firstName: { value: string };
      lastName: { value: string };
      cniNumber: {value: string};
      phone: {value: string};
      commercialRegisterNumber: {value: string};
      email: { value: string };
      password: { value: string };
    };

    const userDatas = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      cniNumber: target.cniNumber.value,
      phone: target.phone.value,
      commercialRegisterNumber: target.commercialRegisterNumber.value,
      email: target.email.value,
      password: target.password.value
    }

    signUp(userDatas);
  };

  return (
    <>
      <h1 className="text-6xl font-sequelBold">Sign Up</h1>
      <Divider />
      <form
        noValidate
        // Change the myForm.submit to myForm.submitStep
        onSubmit={handleSubmit}
      >
        <TextInput
          label="First Name"
          type="text"
          name="firstName"
          placeholder="Enter your first Name"
        />
        <br />
        <TextInput
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Enter your last Name"
        />
        <br />
        <TextInput
          label="Phone"
          type="text"
          name="phone"
          placeholder="Insert your phone number"
        />
        <br />
        <TextInput
          label="Commercial Register Number"
          type="text"
          name="commercialRegisterNumber"
          placeholder="Enter your CRN"
        />
        <br />
        <TextInput
          label="National Identity Card"
          type="text"
          name="cniNumber"
          placeholder="Insert your NIC number"
        />
        <br />
        <TextInput
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your Email address"
        />
        <br />
        <TextInput
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
        />

        {/*Form controls*/}

        <div className="mt-10 space-x-3">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
