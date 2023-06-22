import { useState } from "react";
import FormInput from "./FormInput";
import { AiOutlineFacebook, AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { fetchUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Login() {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
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
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Enter your Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Enter Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
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
            id: 2,
            name: "lastame",
            type: "text",
            placeholder: "Lastname",
            errorMessage:
              "Lastname should be 3-16 characters and shouldn't include any special character!",
            label: "Lastame",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
          },
        {
          id: 3,
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
      ];
      const forgot = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Enter your Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
    
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchUser(values));
        console.log(values);
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const showLogin = () => {
        const login = document.querySelector(".loginModal");
        const reset = document.querySelector(".reset");

        login.classList.toggle("hidden");
        reset.classList.toggle("hidden");
    }
    return (
        <>
            <div className=" xl:w-screen loginModal">
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
                            <div className="">
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
                                    <div className="text-sm text-orange text-right underline hover:no-underline" onClick={showLogin}>Forgot Password</div>

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
                                    <div className="xl:font-bold xl:text-2xl">
                                        <h2>Register for free!</h2>
                                        <h2>Get Premium benefits:</h2>
                                    </div>

                                    <div className="">
                                        <ul className="text-base">
                                            <li className="text-light_black flex items-center gap-x-1"><span className="text-orange"><IoCheckmarkCircleOutline /> </span> <span>Access to Institutuions official portal</span></li>
                                            <li className="text-light_black flex items-center gap-x-1"><span className="text-orange"><IoCheckmarkCircleOutline /> </span><span>Receive tailored recommendations</span> </li>
                                            <li className="text-light_black flex items-center gap-x-1"><span className="text-orange"><IoCheckmarkCircleOutline /> </span> <span>Easily manage your wishlist</span></li>

                                        </ul>
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
                                        {register.map((input) => (
                                            <FormInput
                                                key={input.id}
                                                {...input}
                                                value={values[input.name]}
                                                onChange={onChange}
                                            />
                                        ))}
                                        <button className="text-white bg-orange font-bold w-full py-4 rounded-md">Sign Up</button>
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

            <div className="w-88 p-4 reset hidden">
                <h2 className="text-2xl font-bold">Reset Password</h2>
                <p className="text-base text-light_black my-2">Enter your email</p>
                <p className="text-base text-light_black my-4">Enter your registered email address. You will receive a link to create a new password via email.</p>

                <form onSubmit={handleSubmit} className="w-full my-6">
                                        {forgot.map((input) => (
                                            <FormInput
                                                key={input.id}
                                                {...input}
                                                value={values[input.name]}
                                                onChange={onChange}
                                            />
                                        ))}
                                        <button className="text-white bg-orange font-bold w-full py-4 rounded-md mt-4">Reset Password</button>
                                    </form>
                                    <div className="text-base text-orange text-left underline hover:no-underline" onClick={showLogin}>Return to Sign in</div>

            </div>
        </>
    )
}