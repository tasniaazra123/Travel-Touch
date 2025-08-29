import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Client = () => {
    return (

        <div className='bg-gray-200 pt-4'>
            <div className='text-center'>
                <div className='sm:text-2xl text-xl inline-block border-b-4 border-green-400 rounded px-4 text-stromboli font-medium lg:mt-8 lg:mb-12'>
                    <h1>What Client say About Us</h1>
                </div>
            </div>
            <div className='px-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8  py-8'>

                <div className="w-full max-w-sm bg-white border border-gray-200 hover:shadow-lg rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-4">
                    <div className="flex justify-end px-4 pt-4">
                        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">

                        </div>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg?size=800x" alt="Bonnie image" />
                        <div className='flex text-yellow-400'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Tom cruise</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">bioscientist</span>
                        <div className="flex mt-4 space-x-3 md:mt-6">

                            <p>I have tested this antibody on A549 epithelial lung cancer cells. I got great results, the antibody was diluted 1:1000 with 5%BSA in TBST <span className='text-bold text-center'>see more</span></p>

                        </div>
                        <p ></p>
                    </div>
                </div>
                <div className="w-full max-w-sm bg-white border border-gray-200 hover:shadow-lg rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-4">
                    <div className="flex justify-end px-4 pt-4">
                        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">

                        </div>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQI7ycRYlpa-v7pGJ0iqKUKlap06bkUow7Ag&usqp=CAU" />
                        <div className='flex text-yellow-400'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Jennifer ho</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Universidade NOVA de Lisboa
                        </span>
                        <div className="flex mt-4 space-x-3 md:mt-6">

                            <p>Businesses often use the best biometric access control system to provide high-level security to their facilities. This access system allows the <span className='text-bold text-center'>see more</span></p>

                        </div>
                        <p ></p>
                    </div>
                </div>
                <div className="w-full max-w-sm bg-white border border-gray-200 hover:shadow-lg rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-4">
                    <div className="flex justify-end px-4 pt-4">
                        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">

                        </div>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://www.masslive.com/resizer/LoEzjx6hGSaD8MHPPJHxROf67m0=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.masslive.com/home/mass-media/width2048/img/business-news/photo/avitalcarlis--cooley-dickinson-hospital-webjpg-b1a58576daf37fd0.jpg" />
                        <div className='flex text-yellow-400'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Avital Lave</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">BusinessMan</span>
                        <div className="flex mt-4 space-x-3 md:mt-6">

                            <p>I've owned the Zyto Compass Scanner for more than 4 years. Here's my full review on my experience using this device! <span className='text-bold text-center'>see more</span></p>

                        </div>
                        <p ></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Client;