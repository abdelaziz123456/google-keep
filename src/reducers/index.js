import { addNote,removeNote,clearNotes } from "../actions/types";

const initState=
   [
    {id:1, header:'documentaries',text:'Sad Hill Unearthed , Casting JonBenet ,  Made You Look ,The Bleeding Edge   ,Misha and the Wolves  . '}
    ,
    {id:2, header:'Novels to read',text:'To Kill a Mockingbird,1984, The Lord of the Rings, The Great Gatsby,Pride and Prejudice .'},

    {id:3, header:'Books to read',text:'Idiot brain ,Principles of Psychology , Consciousness Explained ,Power of your subconcious mind ,Happy brain'},
    {id:4, header:'Courses to finish',text:'SEO foundations ,Typescript Course,'},
    {id:5, header:'Films to watch',text:'Manchester By the sea ,The children of men, Psycho,No country for old men'},
    {id:6, header:'Lessons to revise',text:'React redux ,react hooks,OOP in js,No country for old men'},
    
]

const Notes=(state=initState,action)=>{
    let notes=[];
    if(action.type===addNote){
        return [...state,{id:state.length+1,header:action.header,text:action.text}];
        
    }else if (action.type===removeNote){
        notes=state.filter(note=> note.id!==action.id)
        return notes
    }else if(action.type===clearNotes){
        notes=[];
        return notes
    }else{
        return state
    }
}
export default Notes

