import React from 'react';
import { Link } from 'react-router-dom';
const Blog = () => {
    return (
        <div className='py-8'>
            <div className='text-center'>
                <div className='sm:text-2xl text-xl inline-block border-b-4 border-green-400 rounded px-4 text-stromboli font-medium mb-4 lg:mb-8'>
                    <h1>Latest Blogs</h1>
                </div>
                <h2 className='text-center lg:text-4xl text-xl font-semibold mb-8'>Stay Updated And Read <br />
                    Our <span className='text-orange-500'>Blog Posts!</span></h2>
            </div>
            <div className='lg:mx-16 mx-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-12 mb-12'>
                <div >

                    <div className="max-w-sm bg-white border-gray-200 border-2 rounded shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
                        <Link href="#">
                            <img className="rounded-t-lg" src="https://assets-global.website-files.com/61845f7929f5aa517ebab941/6333c0a1d3271392da1e21ed_The%20benefits%20of%20using%20a%20biometric%20access%20control%20system.jpg" alt="" />
                        </Link>
                        <div className="p-5">
                            <Link href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Biometric Access Control System—A Complete Guide</h5>
                            </Link>

                            <p>Do you want to protect your building in a more convenient and efficient manner? Then biometric access control might be exactly what you're looking for....</p>
                            <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-emerald-800  rounded-lg hover:bg-gray-600  focus:ring-4 mt-4 focus:outline-none focus:bg-emerald-400  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
                            </Link>
                        </div>
                    </div>

                </div>
                <div>

                    <div className="max-w-sm bg-white border-gray-200 border-2 rounded shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
                        <Link href="#">
                            <img className="rounded-t-lg" src="https://assets-global.website-files.com/61845f7929f5aa517ebab941/63185d29a8932dd05562f96a_Biometric-access-control-system-scene-p-800.jpg" alt="" />
                        </Link>
                        <div className="p-5">
                            <Link href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">How a Biometric Attendance System Can Benefit Your Business</h5>
                            </Link>
                            <p>Furthermore, the device management features enable administrators to configure, maintain monitor, and ...</p>

                            <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-emerald-800 mt-4 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
                            </Link>
                        </div>
                    </div>

                </div>
                <div>

                    <div className="max-w-sm bg-white border-gray-200 border-2 rounded shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
                        <Link href="#">
                            <img className="rounded-t-lg" src="https://assets-global.website-files.com/61845f7929f5aa517ebab941/6321a4ad9a617d39caa9e4c5_Aratek%20TruFace%20Biometric%20Access%20Control%20Solution.jpg" alt="" />
                        </Link>
                        <div className="p-5">
                            <Link href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Key Components of the Biometric Access Control System
                                    ‍</h5>
                            </Link>

                            <p>These kinds of security systems have been widely used by a lot of enterprises and organizations to safeguard a broad ...</p>
                            <Link href="#" className="inline-flex items-center mt-4 px-3 py-2 text-sm font-medium text-center text-white bg-emerald-800  rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;
