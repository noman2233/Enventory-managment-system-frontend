import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

  const [userdate, setUserdate] = useState({
    email:"",
    username:"",
    password:"",
    cpassword:""
  })
console.log(userdate)
  const addData=(e)=>{

    const {name,value}=e.target
    setUserdate(()=>{
      return{
        ...userdate,
        [name]:value
      }
    })
  }

  const sendData=async(e)=>{
    
    e.preventDefault();

    const { username, email, password, cpassword } = userdate;

if(username.length<5){
  toast.warn("Username contains at least 5 characters")
}else if(email===""){
  toast.warn("Email alredy exists or enter a valid Email ")

}else if(password!==cpassword){
  toast.warn("Passwordnad confirm password must match")
}else{
  const res = await fetch("http://localhost:80/api/auth/register", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username, email, password, cpassword
    })
});
const data = await res.json();

        if (res.status === 422 || !data) {
        toast.error("Invalid Details 👎!", {
            position: "top-center"
        });
    } else {
      setUserdate({
            ...userdate, username: "", email: "",
            password: "", cpassword: ""
        });
        toast.success("Registration Successfully done !", {
            position: "top-center"
        });

      }
} 
}

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>

<ToastContainer />
      <div className="max-w-md w-full space-y-8">
        <div>

          <h1 className=' text-3xl px-4 mb-2 text-center text-black font-bold'>Inventory Managment System</h1>
          <h2 className="mt-6 text-center text-xl font-semibold text-gray-900 font-abc">Sign Up for your account</h2>

        </div>
        <div className=' mt-4 text-center  text-black font-bold underline'>

          <Link to="/login"> or Login</Link>
        </div>
        <form  className="mt-8 space-y-6" method='POST' >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="py-4">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input  id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300  placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" onChange={addData} value={userdate.email} />
            </div>
          
            <div>
              <label htmlFor="username" className="sr-only">Name</label>
              <input id="username" name="username" type="text" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username contains at least 5 characters" onChange={addData}  value={userdate.name} />
            </div>
          </div>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="pb-8">
              <label htmlFor="password" className="sr-only">Passowrd</label>
              <input  id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password contains at least 5 characters" onChange={addData} value={userdate.password}/>
            </div>
            <label htmlFor="email-address" className="sr-only">Confirm Password</label>
          <input id="cpassword" name="cpassword" type="password" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300  placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm password" onChange={addData} value={userdate.cpassword} />
          </div>
          <div>
          </div>



          <div>
          <button type="submit" className=" w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-400 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-cyan-600" onClick={sendData}>
             
             Register
           </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp

