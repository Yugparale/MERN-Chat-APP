import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { useState } from "react";

const Login=()=>{


    const [input,setInput]=useState({
        username:"",
        password:""
    })

    const {loading,login}=useLogin();

const handleSubmit=async (e)=>{
    e.preventDefault();
    await login(input);
    
}

    return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className="text-4xl text-gray-300 text-center font-semibold">Login</h1>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="label p-2">
                        <span className="text-base text-gray-300 label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" value={input.username}  
                    onChange={(e)=>{
                        setInput({...input,username:e.target.value})
                    }}/>
                </div>

                <div>
                <label className="label p-2">
                        <span className="text-base text-gray-300 label-text">Password</span>
                    </label>
                    <input type="text" placeholder="Enter Password" className="w-full input input-bordered h-10" value={input.password}  
                    onChange={(e)=>{
                        setInput({...input,password:e.target.value})
                    }}/>
                </div>
                <Link to="/signup" className="text-sm text-gray-300 hover:underline hover:text-blue-500 mt-2 inline-block" >
                    {"Dont "} have an account?
                </Link>

                <div>
                    <button className="btn btn-block btn-sm mt-2" disabled={loading}>
                    {loading ? <span className=" loading loading-spinner"> </span>:"Login"}
                    </button>
                </div>
            </form>
        </div>
        
    </div>
}

export default Login;

//starter code fro login for other use
// const Login=()=>{
//     return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//             <h1 className="text-4xl text-gray-300 text-center font-semibold">Login</h1>
            
//             <form>
//                 <div>
//                     <label className="label p-2">
//                         <span className="text-base text-gray-300 label-text">Username</span>
//                     </label>
//                     <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"/>
//                 </div>

//                 <div>
//                 <label className="label p-2">
//                         <span className="text-base text-gray-300 label-text">Password</span>
//                     </label>
//                     <input type="text" placeholder="Enter Password" className="w-full input input-bordered h-10"/>
//                 </div>
//                 <a href="#" className="text-sm text-gray-300 hover:underline hover:text-blue-500 mt-2 inline-block" >
//                     {"Dont "} have an account?
//                 </a>

//                 <div>
//                     <button className="btn btn-block btn-sm mt-2">Login</button>
//                 </div>
//             </form>
//         </div>
        
//     </div>
// }