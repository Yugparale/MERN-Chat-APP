import {atom, selector} from "recoil"

export const messagesAtom=atom({
    key:"messages",
    default:[]
})

export const selectedConversationAtom=atom({
    key:"selectedConversation",
    default:null
})


export const selectedpConversation= selector({
    key:"evenSelector",
    get:({get})=>{
        const count =get(countAtom);
        return count%2;
    }
})