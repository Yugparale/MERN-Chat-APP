import Sidebar from "../../Components/Sidebar/Sidebar"; 
import Conversation from "../../Components/Sidebar/Conversation";
import MessageContainer from "../../Components/Messages/MessageContainer";

const Home=()=>{
    return <div className="flex h-screen w-screen rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar></Sidebar>
       <MessageContainer></MessageContainer>
    </div>
}

export default Home;