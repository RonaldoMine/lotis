import React from "react";
import Divider from "../components/Divider";
import {
  Formiz,
  FormizStep, // Import the FormizStep component
  useForm,
} from "@formiz/core";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

type Props = {};

const SignUp = (props: Props) => {
  const myForm = useForm();
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <h1 className="text-6xl font-sequelBold">Sign Up</h1>
      <Divider />
      <Formiz connect={myForm} onValidSubmit={handleSubmit}>
        <form
          noValidate
          // Change the myForm.submit to myForm.submitStep
          onSubmit={myForm.submitStep}
        >
          <FormizStep
            name="step1" // Split the form with FormizStep
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
          </FormizStep>

          <FormizStep
            name="step 2" // Split the form with FormizStep
          >
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
              name="commercialRegisterNum"
              placeholder="Enter your CRN"
            />
            <br />
            <TextInput
              label="National Identity Card"
              type="text"
              name="cni"
              placeholder="Insert your NIC number"
            />
          </FormizStep>

          <FormizStep
            name="step 3" // Split the form with FormizStep
          >
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
          </FormizStep>

          {/*Form controls*/}

          <div className="mt-10 space-x-3">
            {!myForm.isFirstStep && (
              <Button type="button" onClick={myForm.prevStep}>
                Back
              </Button>
            )}
            {myForm.isLastStep ? (
              <Button type="submit" disabled={!myForm.isValid}>
                Submit
              </Button>
            ) : (
              <Button type="submit" disabled={!myForm.isStepValid}>
                Continue
              </Button>
            )}
          </div>
        </form>
      </Formiz>
    </>
  );
};

export default SignUp;
