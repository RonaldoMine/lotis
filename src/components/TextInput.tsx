import React from "react";

type TextInputProps = {
label: string
};

const TextInput = (props: TextInputProps & React.ComponentPropsWithoutRef<'input'>) => {
  return <div>
    <div>
      <span className="text-xl font-sequelBold">{props.label}</span>
    </div>
    <div><input {...props} className="border-black font-sequelLight text-lg border-b-2 w-full py-2 outline-none"/></div>
  </div>;
};

export default TextInput;
