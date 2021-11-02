import { addNote,removeNote,clearNotes } from "./types";
export const add_Note=(header,text)=>{
    const action={
        type:addNote,
        header,
        text
    }
    return action
};


export const remove_Note=(id)=>{
    const action={
        type:removeNote,
        id:id,
    }
    return action
};


export const clear_Notes=()=>{
    const action={
        type:clearNotes,
    }
    return action
}



