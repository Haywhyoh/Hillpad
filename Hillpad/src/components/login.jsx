import { useState } from "react";
import FormInput from "./FormInput";
import { AiOutlineFacebook, AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
export default function Login() {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [toggleLogin, setToggleLogin] = useState(true);

    const toggle = () => {
        setToggleLogin(!toggleLogin);
    }
    const inputs = [
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Enter your Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Enter Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
    ];

    const register = [
        {
          id: 1,
          name: "firstame",
          type: "text",
          placeholder: "Firstname",
          errorMessage:
            "Firstname should be 3-16 characters and shouldn't include any special character!",
          label: "Firstname",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Firstname",
            errorMessage:
              "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
          },
        {
          id: 2,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage: "It should be a valid email address!",
          label: "Email",
          required: true,
        },
   
        {
          id: 4,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage:
            "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
        {
          id: 5,
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirm Password",
          errorMessage: "Passwords don't match!",
          label: "Confirm Password",
          pattern: values.password,
          required: true,
        },
      ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div>
                {
                    toggleLogin ? <div className="flex p-4 min-w-fit w-full max-w-4xl items-center">
                        <div className="w-1/2">
                            <div className="flex flex-col gap-y-10">
                                <div className="xl:font-bold xl:text-3xl">
                                    <h2>Hey there!</h2>
                                    <h2>Welcome back.</h2>
                                </div>


                                <div className="text-sm text-light_black">
                                    <div>Don't have an account? <span className="text-light underline hover:no-underline" onClick={toggle}> Sign up here</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 p-4 flex items-center gap-x-10 ">
                            <div className="border-s h-60 border-light_black border-opacity-20">
                            </div>
                            <div className="w-full">
                                <form onSubmit={handleSubmit} className="w-full mb-6">
                                    {inputs.map((input) => (
                                        <FormInput
                                            key={input.id}
                                            {...input}
                                            value={values[input.name]}
                                            onChange={onChange}
                                        />
                                    ))}
                                    <button className="text-white bg-orange font-bold w-full py-4 rounded-md">Sign In</button>
                                    <div className="text-sm text-orange text-right underline hover:no-underline">Forgot Password</div>

                                </form>
                                <div className="flex items-center gap-x-4">
                                    <div className="border-t w-36 border-light_black border-opacity-30 "></div>
                                    <div className=" opacity-70">or</div>
                                    <div className="border-t w-36 border-light_black border-opacity-30 "></div>
                                </div>
                                <div >
                                    <button className="text-white bg-blue font-bold w-full py-4 rounded-md my-2 flex items-center gap-x-12 px-4"><span className="text-lg"><FaFacebookF /></span><span>Continue with Facebook</span></button>
                                    <button className="text-white bg-red font-bold w-full py-4 rounded-md flex items-center gap-x-12 px-4"><span className="text-lg"><AiOutlineGoogle /></span><span>Continue with Google</span></button>
                                </div>
                            </div>
                        </div>

                    </div> :

                        <div className="flex p-4 min-w-fit w-full max-w-4xl items-center">
                            <div className="w-1/2">
                                <div className="flex flex-col gap-y-10">
                                    <div className="xl:font-bold xl:text-3xl">
                                        <h2>Hey there!</h2>
                                        <h2>Login.</h2>
                                    </div>


                                    <div className="text-sm text-light_black">
                                        <div>Already have an account? <span className="text-light underline hover:no-underline" onClick={toggle}> Sign in</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 p-4 flex items-center gap-x-10 ">
                                <div className="border-s h-60 border-light_black border-opacity-20">
                                </div>
                                <div className="w-full">
                                    <form onSubmit={handleSubmit} className="w-full mb-6">
                                        {inputs.map((input) => (
                                            <FormInput
                                                key={input.id}
                                                {...input}
                                                value={values[input.name]}
                                                onChange={onChange}
                                            />
                                        ))}
                                        <button className="text-white bg-orange font-bold w-full py-4 rounded-md">Sign Up</button>
                                        <div className="text-sm text-orange text-right underline hover:no-underline">Forgot Password</div>

                                    </form>
                                    <div className="flex items-center gap-x-4">
                                        <div className="border-t w-36 border-light_black border-opacity-30 "></div>
                                        <div className=" opacity-70">or</div>
                                        <div className="border-t w-36 border-light_black border-opacity-30 "></div>
                                    </div>
                                    <div >
                                        <button className="text-white bg-blue font-bold w-full py-4 rounded-md my-2 flex items-center gap-x-12 px-4"><span className="text-lg"><FaFacebookF /></span><span>Sign up with Facebook</span></button>
                                        <button className="text-white bg-red font-bold w-full py-4 rounded-md flex items-center gap-x-12 px-4"><span className="text-lg"><AiOutlineGoogle /></span><span>Sign up with Google</span></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                }
            </div>
        </>
    )
}