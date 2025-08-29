import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../Assets/107385-login.json";
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Pages/Context/AuthProvider';

const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const saveUser = (name, email) => {
        const number = "0123123123";
        const user = {
            name,
            email,
            contact: number,
            sellerVerified: false,
            role: "buyer",
        };
        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                navigate("/");
            });
    };
    const handleLogin = (data) => {
        console.log(data);
        setLoginError("");
        signIn(data.email, data.password)
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message);
                setLoginError(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((userCredential) => {
                const user = userCredential.user;

                const currentUser = {
                    email: user.email,
                };
                saveUser(user.displayName, user.email);
                // navigate(from, { replace: true });
                toast.success("Google Log in Successful");
                navigate(from, { replace: true });

                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                // console.log(errorCode);
                toast.error(errorCode.substring(5));
                // The email of the user's account used.
                // ...
            });
    };

    return (
        <div>
            <div className="lg:flex pb-12 w-full items-center justify-center bg-gray-200 bg-cover bg-no-repeat login blog px-8">
                <div className='lg:mr-20 sm:h-12 lg:hidden -mt-2]'><Lottie style={{ width: 200, height: 300 }} animationData={groovyWalkAnimation} loop={true} /></div>
                <div className='lg:block hidden lg:mr-20'><Lottie animationData={groovyWalkAnimation} loop={true} /></div>
                <div className="rounded-xl bg-blue-300 bg-opacity-50 lg:px-16 shadow-lg backdrop-blur-md max-sm:px-8 pb-6 -mt-4 lg:mt-4 lg:pb-16 lg:pt-4">
                    <div className="text-white">
                        <div className="mb-8 flex flex-col items-center">
                            <img src="https://abossmart.com/images/login1.png" width="150" alt="" srcset="" />
                            <h1 className="mb-2 text-2xl">Travel Touch</h1>
                            <span className="text-gray-300">Enter Login Details</span>
                        </div>
                        <form onSubmit={handleSubmit(handleLogin)} className='-mt-12'>
                            <div className="mb-4 text-lg">
                                <input className=" rounded-xl lg:rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 lg:mb-3 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="id@email.com"
                                    {...register("email", {
                                        required: "Email Address is required",
                                    })}
                                />
                                {errors.email && (
                                    <p className="text-red-600">{errors.email?.message}</p>
                                )}
                            </div>

                            <div className="mb-4 text-lg">
                                <input className="lg:rounded-3xl rounded-xl border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="*********"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be 6 characters or longer",
                                        },
                                    })}
                                />
                                {errors.password && (
                                    <p className="text-red-600">{errors.password?.message}</p>
                                )}
                            </div>
                            <div className="mt-8 flex justify-center text-lg text-white">
                                <button type='submit' className='bg-emerald-800 px-24 py-2 rounded-lg text-xl'>Login</button>
                            </div>
                            <div>
                                {loginError && <p className="text-red-600">{loginError}</p>}
                            </div>

                            <p className='mt-4 -mb-3 text-gray-600'>
                                Don't have an account? <Link to="/SignUp" className="text-blue-700">Sign up first</Link>
                            </p>
                            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-600 before:mt-0.5 after:flex-1 after:border-t after:border-gray-600 after:mt-0.5">
                                <p className="text-center font-semibold mb-0 text-blue-900 px-2">
                                    OR

                                </p>
                            </div>

                            <div onClick={handleGoogleSignIn} className="lg:mt-8 mt-2  flex justify-center text-lg text-white">
                                <button type='submit' className='bg-blue-800 px-24 py-2 rounded-lg text-xl'>Google</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;