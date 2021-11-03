import { addNote,removeNote,clearNotes,editNote } from "./types";
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
export const edit_Note=(id,header,text)=>{
    const action={
        type:editNote,
        id:id,
        header:header,
        text:text

       
    }
    return action
};


export const clear_Notes=()=>{
    const action={
        type:clearNotes,
    }
    return action
}



