import React from 'react';
import { Link } from 'react-router-dom';
import useAdmin from '../../Pages/Hooks/UseAdmin';
import Loading from '../Loading/Loading';

import './Contact.css'
const Contact = () => {
    const [isAdminLoading] = useAdmin();
    if (isAdminLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='text-center'>
                <div className='sm:text-2xl text-xl inline-block border-b-4 border-green-400 rounded px-4 mt-8 text-stromboli font-medium lg:mt-12 '>
                    <h1>Contact Us</h1>
                </div>
            </div>
            <div className="map-form-container">

                <div>
                    <iframe style={{ height: 600, width: 1260 }}
                        title='Meddical'
                        className='lg:w-full mt-16 lg:mx-auto mb-8 lg:relative'
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7300.888371851632!2d90.3636722!3d23.802799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c12cd2f41ad5%3A0xd4eb5975120eaff0!2sMirpur%2010%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1658586728053!5m2!1sen!2sbd"
                        allowFullScreen=''
                        loading='lazy'></iframe>
                </div>
                <div className="flex items-center justify-center px-8 lg:px-12 py-4 mt-72 rounded-lg map-container absolute bg-gray-800 bg-opacity-50">
                    <div className="mx-auto w-full max-w-[550px] ">
                        <form action="https://formbold.com/s/FORM_ID" method="POST" >
                            <div className="lg:mb-5">
                                <label
                                    htmlFor="name"
                                    className="lg:mb-2 block text-base font-medium text-[#07074D]"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="">
                                <label
                                    htmlFor="email"
                                    className="lg:mb-2 block text-base font-medium text-[#07074D]"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="example@domain.com"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="lg:mb-3">
                                <label
                                    for="subject"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Enter your subject"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    for="message"
                                    className="mb-2 block text-base font-medium text-[#07074D]"
                                >
                                    Message
                                </label>
                                <textarea
                                    rows="2"
                                    name="message"
                                    id="message"
                                    placeholder="Type your message"
                                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                            </div>
                            <div>

                                <Link to='/'><a
                                    className="hover:shadow-form rounded-md bg-emerald-800 py-3 px-8 text-base font-semibold text-white outline-none"
                                >
                                    Submit
                                </a>

                                </Link>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;