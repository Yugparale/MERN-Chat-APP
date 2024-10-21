import { useState } from "react"
    import toast from "react-hot-toast";
import { useRecoilState } from "recoil";
import { messagesAtom } from "../assets/store/messages";
import { selectedConversationAtom } from "../assets/store/messages";

const useSendMessage = () => {
    const [loading,setLoading]=useState(false);
    const [messages,setMessages]=useRecoilState(messagesAtom);
    const [selectedConversation,setSelectedConversation]=useRecoilState(selectedConversationAtom);

        const sendMessage = async (message) =>{
            setLoading(true);
            try {
              const res=await fetch(`/api/messages/send/${selectedConversation._id}`,{
                method:"POST",
                headers:{"Content-Type" : "application/json"},
                body: JSON.stringify({message})
              })  
    
              const data=await res.json();
              if (data.error) {
				throw new Error(data.error);
			}
              setMessages([...messages,data]);

            } catch (error) {
               toast.error(error.mesage); 
            }finally{
                setLoading(false)
            }
           
        };

        return {loading,sendMessage}
    

    
}

export default useSendMessage
