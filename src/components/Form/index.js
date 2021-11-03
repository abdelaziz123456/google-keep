import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import './index.scss';
import {add_Note} from '../../actions/index';
export default function Form() {
    const dispatch=useDispatch()
    const titleRef=useRef();
    const subjectRef=useRef();
    const submitHandler=(e)=>{
        e.preventDefault();
        
        dispatch(add_Note(titleRef.current.value,subjectRef.current.value));
        titleRef.current.value='';
        subjectRef.current.value=''

    }
    return (
        <div className='form-container my-5 d-flex justify-content-center'>
            <form onSubmit={submitHandler} className="form px-5 d-flex flex-column">


                <input type="text" className="form-control title" placeholder="Title" ref={titleRef}  required/>

                <input type="text" className="form-control title" placeholder="Subject" ref={subjectRef}  required/>

                    <div className='w-100 d-flex justify-content-end mt-3 mb-1'>
                        

                        <button className="btn mb-3 " type='submit'>
                        Add Note
                        </button>

                    </div>
                


            </form>
        </div>
    )
}




