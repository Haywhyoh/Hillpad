import { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="my-4">
      <label className="">{label}</label><br />
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
        className="p-3 w-full border border-light_black border-opacity-40 rounded-md outline-none mt-2"
      /> <br />
      <span className="text-sm text-light hidden">{errorMessage}</span>
    </div>
  );
};

export default FormInput;