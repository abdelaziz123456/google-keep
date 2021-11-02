import { Facebook, LinkedIn, Twitter, YouTube } from '@material-ui/icons';
import React from 'react';
import './index.scss';


const Footer = () => {
    return (
        <div className='footer text-center mt-4 py-4'>
            <h6>Designed By Abdelaziz</h6>
            <h6>@Copyright All rights reserved</h6>
            <div className="icons my-1">
                <span>
                <Twitter/>
                </span>

                <span>
                <Facebook/>
                </span>

                <span>
                <LinkedIn/>
                </span>


                <span>
                <YouTube/>
                </span>
                
                
            </div>
            

        </div>
    );
};

export default Footer;