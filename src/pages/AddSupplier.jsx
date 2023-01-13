import React, { useState } from "react";
import { useRef } from 'react';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

const AddSupplier = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4vug0o3', 'template_8nkn23h', form.current, 'WdKHh8o-91sVpuO8H')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };


  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <ToastContainer
            position="top-right"
            autoClose={1200}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <h1 className=" text-3xl px-4 mb-2 text-center text-black font-bold">
            {" "}
            New Supplier
          </h1>

          <div className=" mt-4 text-center  text-black font-bold underline">
            <Link to="/editprofile"> or Edit Your Profile</Link>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="py-4">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300  placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder=" Name"
               
              />
            </div>
            <div className="py-4">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300  placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              
              />
            </div>
            <div className="py-4">
              <input
                id="number"
                name="number"
                type="number"
                autoComplete="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300  placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder=" Phone Number"
             
              />
            </div>

            <div className="py-4">
              <textarea
                id="message"
                name="message"
                placeholder="Bio"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none  leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className=" w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-400 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-cyan-600"
              
            >
              Add Supplier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSupplier;
