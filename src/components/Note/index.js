
import {Delete,Edit} from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { remove_Note } from '../../actions';
import './index.scss'
function Note (props){
    const dispatch=useDispatch();
    const deleteHandler=()=>{
        dispatch(remove_Note(props.id))
    }
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
                        
                    <button className='btn'>
                        <Edit/>
                    </button>
                    
                        
                    
                </div>
            </div>
        </div>
    )
}

export default Note;