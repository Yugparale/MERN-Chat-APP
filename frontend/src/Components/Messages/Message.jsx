import { useRecoilState } from "recoil";
import { useAuthContext } from "../../assets/context/contex";
import { selectedConversationAtom } from "../../assets/store/messages";
import {extractTime} from "../../utils/extractTime.js"

const Message = ({message}) => {
  const {authUser}=useAuthContext();
  const [selectedConversation,setSelectedConversation]=useRecoilState(selectedConversationAtom)
  const fromMe= message.senderId===authUser._id;
  const chatClassname=fromMe ? 'chat-end' : 'chat-start'
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubblecolor =fromMe ? 'bg-purp' : "";
  const name=fromMe ? authUser.username :selectedConversation?.username;
  const time=extractTime(message.createdAt)
  
  return (
		<div className={`chat ${chatClassname}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
      <div className={`chat-bubble text-white ${bubblecolor} pb-2`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{time}</div>
		</div>
	); 
}

export default Message
