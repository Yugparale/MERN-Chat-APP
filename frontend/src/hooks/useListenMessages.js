import { useSocketContext } from "../context/SocketContext";
import { useRecoilState } from "recoil";
import { messagesAtom } from "../assets/store/messages";
import { useEffect } from "react";

const useListenMessages = () => {
    const {socket}=useSocketContext();
    const [messages,setMessages]=useRecoilState(messagesAtom);

    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            setMessages([...messages,newMessage]);
        })

        return ()=> socket?.off("newMessage")
    },[socket,messages])
}

export default useListenMessages
