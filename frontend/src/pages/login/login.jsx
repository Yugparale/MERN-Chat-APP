const Login=()=>{
    return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className="text-4xl text-gray-300 text-center font-semibold">Login</h1>
            
            <form>
                <div>
                    <label className="label p-2">
                        <span className="text-base text-gray-300 label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"/>
                </div>

                <div>
                <label className="label p-2">
                        <span className="text-base text-gray-300 label-text">Password</span>
                    </label>
                    <input type="text" placeholder="Enter Password" className="w-full input input-bordered h-10"/>
                </div>
                <a href="#" className="text-sm text-gray-300 hover:underline hover:text-blue-500 mt-2 inline-block" >
                    {"Dont "} have an account?
                </a>

                <div>
                    <button className="btn btn-block btn-sm mt-2">Login</button>
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