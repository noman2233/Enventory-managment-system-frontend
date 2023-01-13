import React, {  useState } from 'react'

import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const AddProduct = (e) => {
const navigate=useNavigate()
  const [logdata, setData] = useState({
    email: "",
    password: ""
});

  const adddata = (e) => {
    const { name, value } = e.target;


    setData((pre) => {
        return {
            ...pre,
            [name]: value
        }
    })
};


  const sendData=async(e)=>{
    const { email, password } = logdata;
    e.preventDefault()
    const res = await fetch("auth/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,password
    })
});

  const data=await res.json()

  if(res.status===400 || !data){
  
    toast.error("invalid credentials!", {
      position: "top-center"
  });
  }else{
 
    setData({...data, email:"",password:""} )
    toast.success("You are being redirected to Home page", {
      position: "top-center"
      
    });
    setTimeout(() => {
      
      navigate("/");
    }, 3000);
  }
}

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
          <h1 className=' text-3xl px-4 mb-2 text-center text-black font-bold'>Add New Product</h1>
     
      
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="py-4">
          
              <input id="name" name="name" type="text" autoComplete="text" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300  placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Product Name" value={logdata.email} onChange={adddata} />
            </div>
            <div className="py-4">
              <input id="category" value={logdata.password} name="category" type="text" autoComplete="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 py-3 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Product Category" onChange={adddata} />
            </div> 
             <div className="py-4">
         
              <textarea id="message" name="message" placeholder='Description' class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none  leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div> 
            <div  className="py-4">
              <input id="price" value={logdata.password} name="price" type="Number" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 py-3 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Product Price" onChange={adddata} />
            </div>
             <div  className="py-4">
              <input id="Stock" value={logdata.password} name="Stock" type="text" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 py-3 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Instcok or Out of Stock" onChange={adddata} />
            </div>  
            <label htmlFor="">Stock Avalability</label>
             <div  className="py-4 flex justify-around">
          
  

              <label htmlFor="">InStock</label>
              <input type="radio" name="stock" id="instock" value="instock"/>
          
         

              <label htmlFor="">OutOfStock</label>
              <input type="radio" name="stock" id="outofstock" value="outofstock"/>
              </div>
            <div  className="py-4">
              <input id="quantity" value={logdata.password} name="quantity" type="Number" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 py-3 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Quantity" onChange={adddata} />
            </div>
          </div>
          <div>
            <button type="submit" className=" w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-400 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-cyan-600" onClick={sendData}>
             
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProduct