import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../Assets/107385-login.json";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Pages/Context/AuthProvider';

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState("");
    const navigate = useNavigate();

    const saveUser = (name, email, role) => {
        const number = "0123123123";
        const user = { name, email, contact: number, sellerVerified: false, role };
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

    const handleSignUp = (data) => {
        setSignUPError("");
        console.log(data);
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast("User Created Successfully.");
                const userInfo = {
                    displayName: data.name,
                };
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);
                    })
                    .catch((err) => console.log(err));
            })
            .catch((error) => {
                console.log(error);
                setSignUPError(error.message);
            });
    };
    return (
        <div>
            <section className="h-screen">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className='lg:mr-20 sm:h-12 lg:hidden -mt-2]'><Lottie style={{ width: 200, height: 300 }} animationData={groovyWalkAnimation} loop={true} /></div>
                        <div className='lg:block hidden lg:mr-20'><Lottie animationData={groovyWalkAnimation} loop={true} /></div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20 -mt-8">
                            <h2 className="text-3xl text-center lg:mb-10 mb-4 font-semibold">
                                Registration
                            </h2>
                            <form onSubmit={handleSubmit(handleSignUp)}>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Your Name"
                                        {...register("name", {
                                            required: "Name is required",
                                        })}
                                    />
                                    {errors.email && (
                                        <p className="text-red-600">{errors.email?.message}</p>
                                    )}
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email address"
                                        {...register("email", {
                                            required: "Email Address is required",
                                        })}
                                    />
                                    {errors.email && (
                                        <p className="text-red-600">{errors.email?.message}</p>
                                    )}
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
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

                                <select
                                    className="selectform-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    {...register("role")}
                                >
                                    <option value="buyer" defaultValue="buyer">
                                    Tourist
                                    </option>
                                    <option value="seller">Travel Agent</option>
                                </select>

                                <div className="mt-8 w-full text-lg text-white">
                                    <button type='submit' className='bg-emerald-800 px-24 py-2 rounded-lg w-full text-xl'>Register</button>
                                </div>
                                <div>
                                    {signUpError && <p className="text-red-600">{signUpError}</p>}
                                </div>
                                <p className="text-gray-600 mt-6">
                                    Already have an account?{" "}
                                    <Link className="text-blue-500 font-semibold" to="/login">
                                        Login here
                                    </Link>{" "}
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;