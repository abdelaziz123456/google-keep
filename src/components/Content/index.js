import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import {remove_Note,clear_Notes} from '../../actions/index';
import Note from '../Note';


class Content  extends Component {
   render(){

     
    
  
        const Notes=this.props.notes;
        
        
       
        return (
            <div className='content text-center '>
                

                {Notes.length ?
                    <div className="row px-3 mx-0  ">

                    
                   { Notes.map(note=>{
                        return(
                           <Note header={note.header} text={note.text} id={note.id}/>
                           
                        )
                    })}
                    </div> : <h1>there is no notes <br/> add some</h1>
                }



                <div className="d-flex justify-content-center mt-5">
                <button className="btn mb-3 " onClick={this.props.clear_Notes} >
                        Clear Notes
                        </button>
                </div>




                
            </div>
        );
    }
}





function mapStateToProps(state){
    
       return {
           notes:state
       }
    
}
export default connect(mapStateToProps,{remove_Note,clear_Notes})(Content);