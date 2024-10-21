import { useState } from "react";
import { useRecoilState } from "recoil";
import { selectedConversationAtom } from "../../assets/store/messages";
import useGetConversations from "../../hooks/useGetConversations.js"
import toast from "react-hot-toast";


const SearchInput=()=>{
    const [search,setSearch]=useState("");
    const [selectedConversation,setSelectedConversation]=useRecoilState(selectedConversationAtom)
    const {conversations} =useGetConversations();

const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
        return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if (conversation) {
        setSelectedConversation(conversation);
        setSearch("");
    } else toast.error("No such user found!");
};
return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input
            type='text'
            placeholder='Search…'
            className='input input-bordered rounded-full'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' className='btn btn-circle bg-purp text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>        </button>
    </form>
);
};
export default SearchInput;