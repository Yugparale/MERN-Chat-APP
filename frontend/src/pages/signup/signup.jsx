import { useState } from "react";
import GenderCheckBox from "./gendercheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup=()=>{

    const [input,setInput]=useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
})

const {loading,signup}=useSignup();

const handleCheckbox=(gender)=>{
    setInput({...input,gender:gender})
}

const handleSubmit=async (e)=>{
    e.preventDefault();
    await signup(input);
    
}


    return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className="text-4xl text-gray-300 text-center font-semibold">SignUp</h1>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="label p-2">
                        <span className="text-base text-gray-300 label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="Enter Fullname" className="w-full input input-bordered h-10" value={input.fullName}  
                    onChange={(e)=>{
                        setInput({...input,fullName:e.target.value})
                    }}/>
                </div>
                <div>
                    <label className="label p-2">
                        <span className="text-base text-gray-300 label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10 "value={input.username}  
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
                <div>
                <label className="label p-2">
                        <span className="text-base text-gray-300 label-text">Confirm Password</span>
                    </label>
                    <input type="text" placeholder="Enter Password Again" className="w-full input input-bordered h-10 " value={input.confirmPassword}  
                    onChange={(e)=>{
                        setInput({...input,confirmPassword:e.target.value})
                    }}/>
                </div>
                <GenderCheckBox onCheckboxChange={handleCheckbox} selectedGender={input.gender}></GenderCheckBox>

                <Link to="/login" className="text-sm text-gray-300 hover:underline hover:text-blue-500 mt-3 inline-block" >
                    {"Already "} have an account?
                </Link>

                <div>
                    <button className="btn btn-block btn-sm mt-2" disabled={loading} >
                        {loading ? <span className=" loading loading-spinner"> </span>:"Signup"}</button>
                </div>
            </form>
        </div>
        
    </div>
}

export default Signup;

//starter code fro sign up for other use
// const Signup=()=>{
//     return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//             <h1 className="text-4xl text-gray-300 text-center font-semibold">SignUp</h1>
            
//             <form>
//                 <div>
//                     <label className="label p-2">
//                         <span className="text-base text-gray-300 label-text">Full Name</span>
//                     </label>
//                     <input type="text" placeholder="Enter Fullname" className="w-full input input-bordered h-10"/>
//                 </div>
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
//                 <div>
//                 <label className="label p-2">
//                         <span className="text-base text-gray-300 label-text">Confirm Password</span>
//                     </label>
//                     <input type="text" placeholder="Enter Password Again" className="w-full input input-bordered h-10 "/>
//                 </div>
//                 <GenderCheckBox></GenderCheckBox>
//                 <a href="#" className="text-sm text-gray-300 hover:underline hover:text-blue-500 mt-3 inline-block" >
//                     {"Already "} have an account?
//                 </a>

//                 <div>
//                     <button className="btn btn-block btn-sm mt-2">SignUp</button>
//                 </div>
//             </form>
//         </div>
        
//     </div>
// }