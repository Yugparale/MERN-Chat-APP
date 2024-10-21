import Sidebar from "../../Components/Sidebar/Sidebar"; 
import Conversation from "../../Components/Sidebar/Conversation";
import MessageContainer from "../../Components/Messages/MessageContainer";
import { RecoilRoot } from "recoil";

const Home=()=>{
    return <div className="flex h-screen w-screen rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <RecoilRoot>
            <Sidebar></Sidebar>
       <MessageContainer></MessageContainer>
        </RecoilRoot>
        
    </div>
}

export default Home;