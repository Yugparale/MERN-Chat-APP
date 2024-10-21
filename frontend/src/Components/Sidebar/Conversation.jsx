import { useRecoilState } from "recoil"
import { selectedConversationAtom } from "../../assets/store/messages";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({conversation,lastIdx}) => {

  const [selectedConversation,setSelectedConversation]=useRecoilState(selectedConversationAtom);
//If selectedConversation is null or undefined, then selectedConversation?._id will be undefined, and the comparison will still work safely without throwing an error
  const isSelected= selectedConversation?._id === conversation._id
  const {onlineUsers}=useSocketContext();
  const isOnline=onlineUsers.includes(conversation._id);
  
  return (
    <>
    <div className={`flex gap-3 items-center hover:bg-purp rounded p-2 py-1 cursor-pointer
      ${isSelected ? "bg-purp" : ""}
      `}
      onClick={()=>{setSelectedConversation(conversation)}}
      >
      <div className={`avatar ${isOnline ? "online" : 'offline'}`}>
        <div className="w-12 rounded-full">
            <img src={conversation.profilePic} />
        </div>
      </div>

      <div>
        <p className="font-bold text-gray-200">{conversation.fullName}</p>
      </div>
     </div>
    <div className="divider my-1 py-1 h-0"></div>
   </> 
  )
}

export default Conversation
