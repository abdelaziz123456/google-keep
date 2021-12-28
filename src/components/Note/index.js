
import {Delete,Edit} from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { remove_Note ,edit_Note} from '../../actions';
import { Modal, ModalBody  } from 'reactstrap';
import {useState,useRef} from 'react'

import './index.scss'
function Note (props){
    const dispatch=useDispatch();
    const deleteHandler=()=>{
        dispatch(remove_Note(props.id))
    }
    const editHandler=(e)=>{
       e.preventDefault();
        dispatch(edit_Note(props.id,titleRef.current.value,subjectRef.current.value))
        toggle()
    }



    //modal hooks
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    //form hooks
    const titleRef=useRef();
    const subjectRef=useRef()



    return(
        <div className=' d-flex    flex-column justify-content-center  col-12  col-lg-2 col-md-4 col-sm-6  '>
            <div className=" my-2 p-2 note d-flex flex-column justify-content-between ">

            
                <h4 className='mb-0'>{props.header}</h4>
                <hr/>
                <p>{props.text}</p>
                <div className='d-flex justify-content-around my-3'>
                    <button className="btn" onClick={deleteHandler} >
                        <Delete/>
                    </button>
                        
                    <button className='btn' onClick={toggle}>
                        <Edit/>
                    </button>

                   
                    
                        
                    
                </div>
            </div>


        {/* modal section  start */}
            <div>

          <Modal isOpen={modal} toggle={toggle} centered={true}  style={{maxWidth: '1200px', width: '80%'}}>
          <div className='d-flex justify-content-end  '>
              <button className="btn" onClick={toggle} >
                 <h5 >X</h5> 
              </button>
            </div>
                        <ModalBody className={'invest-content'}>
                        <div className='form-container my-5 d-flex justify-content-center'>
            <form onSubmit={editHandler} className="form px-5 d-flex flex-column">

            


                <input type="text" className="form-control title" placeholder="Title" ref={titleRef}  required/>

                <input type="text" className="form-control title" placeholder="Subject" ref={subjectRef}  required/>

                    <div className='w-100 d-flex justify-content-end mt-3 mb-1'>
                        

                        <button className="btn mb-3 " type='submit'>
                        Add Note
                        </button>

                    </div>
                


            </form>
        </div>

                        
         </ModalBody>
  
                </Modal>
                    </div>

            {/* modal section  end */}
        </div>
    )
}

export default Note;