import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage"

const MessageInput = () => {
  const [message,setMessage]=useState("");
 const {loading,sendMessage}= useSendMessage();

const handleSubmit=async(e)=>{
  e.preventDefault();
  if(!message) return;
  await sendMessage(message);
  setMessage("");
}

  return (
    
      <form className="px-4 my-3" onSubmit={handleSubmit}>
        <div className="w-full relative"> 
            <input type="text"
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" placeholder="Send a Message" 
            value={message}
            onChange={(e)=>setMessage(e.target.value)} />
            
            {!loading ? <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>
            </button> : <span className="loading loading-spinner"></span>}
        </div>
      </form>
  )
}

export default MessageInput
