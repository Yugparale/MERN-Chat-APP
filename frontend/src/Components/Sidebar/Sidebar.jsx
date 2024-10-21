import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar= ()=>{
    return <div className=" w-0 md:w-1/3 border-r border-slate-500 p-4 flex flex-col">
        <SearchInput />
        <div className="divider px-3"></div>        
        <Conversations></Conversations>

        <LogoutButton></LogoutButton>

    </div>

}

export default Sidebar;