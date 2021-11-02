import React from 'react';
import './index.scss';

import { Apps, Refresh,  Settings, ViewStream } from '@material-ui/icons';
import userImage from '../../images/user.png';




export default function Header() {
    const logo=<img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo" />



    
    return (
        <div className=''>


        
        <div className='header d-flex justify-content-between align-items-center'>


            <div className='d-flex align-items-center '>
                
            {logo} 
            <h4>
                Keep
            </h4>
            </div>


            
       


            <div className='left'>
                <span>
                <Refresh/>
                </span>

                <span>
                <ViewStream/>
                </span>

                <span>
                    <Settings/>
                </span>
                
                <span>
                    <Apps/>
                </span>
                <span >
                    <img src={userImage} alt="" style={{height:'30px'}} />
                </span>
                
            </div>
            

        </div>









     




        </div>
    )
}
