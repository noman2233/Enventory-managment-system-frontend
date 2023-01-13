import React, {  useState } from 'react'

import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const EditProfile = (e) => {
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
          <h1 className=' text-3xl px-4 mb-2 text-center text-black font-bold'> Edit/Update Your Profile</h1>
     
          <div className=' mt-4 text-center  text-black font-bold underline'>

<Link to="/editprofile"> or Edit Your Profile</Link>
</div>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="py-4">          
              <input id="name" name="name" type="text" autoComplete="text" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300  placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder=" Name" value={logdata.email} onChange={adddata} />
            </div>  
             <div className="py-4">          
              <input id="email" name="email" type="email" autoComplete="text" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300  placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" value={logdata.email} onChange={adddata} />
            </div> 
                 <div className="py-4">      
              <input id="number" name="number" type="number" autoComplete="text" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300  placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder=" Phone Number" value={logdata.email} onChange={adddata} />
            </div>
          
             <div className="py-4">
         
              <textarea id="desc" name="desc" placeholder='Bio' class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none  leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div> 
           
          </div>
          <div>
            <button type="submit" className=" w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-400 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-cyan-600" onClick={sendData}>
             
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfile