import React from 'react'
import '../index.css';
import spinner from './images/__Iphone-spinner-1.gif';
import {Image} from 'react-bootstrap';

function Isloading() {
    return (
        <div>

            <div className="my-3" role="status">
                {/* <span className="sr-only">Loading...</span> */}
                <Image className='img-fluid rounded'  src={spinner} style={{width:'100px', margin:'auto' }} alt="Loading..." />
            </div>


        </div>
    )
}

export default Isloading;
