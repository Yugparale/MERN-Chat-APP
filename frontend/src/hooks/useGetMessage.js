import { useEffect } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { selectedConversationAtom } from "../assets/store/messages";
import { messagesAtom } from "../assets/store/messages";
const useGetMessage = () => {
  
    const [loading,setLoading]=useState(false);
    const [messages,setMessages]=useRecoilState(messagesAtom);
    const [selectedConversation,setSelectedConversation]=useRecoilState(selectedConversationAtom);

    useEffect(()=>{
        const getMessage = async () =>{
            setLoading(true);
            try {
              const res=await fetch(`/api/messages/${selectedConversation?._id}`)  
    
              const data=await res.json();
              if (data.error) {
				throw new Error(data.error);
			}
              setMessages(data);

            } catch (error) {
               toast.error(error.mesage); 
            }finally{
                setLoading(false)
            }
        };

        if(selectedConversation?._id) getMessage();
    },[selectedConversation])

    return {loading,messages}
   

        
    
}

export default useGetMessage
