import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../Assets/84048-404-page-not-found.json";
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div>
            <div className='flex justify-center mt-12 my-8'>
                <h2 className='text-center font-bold lg:text-2xl text-gray-600'>Page not Found</h2>
                <Link to='/' className='ml-4 text-center py-2 font-semibold px-4 rounded-md lg:text-xl text-white my-8 bg-emerald-800'>Go to home</Link>
            </div>
            <div>
                <div className='sm:h-12 lg:hidden '><Lottie animationData={groovyWalkAnimation} loop={true} /></div>
                <div className='lg:block hidden'><Lottie animationData={groovyWalkAnimation} loop={true} /></div>
            </div>
        </div>
    );
};

export default Error;