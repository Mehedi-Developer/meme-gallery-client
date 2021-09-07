import React from 'react';
import { useParams } from 'react-router';
import notFound from './notFound.gif';
import './NotFound.css';
const NotFound = () => {
    const {page}: any = useParams();
    // console.log(page);
    return (
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            
          }}
          className="m-0"
        >
            <div className='text-warning content pt-5 bg-dark text-center'>
                <h5 className="pt-5" style={{position:'relative', top: '150px'}}>Sorry!!! The (<span className="text-danger">{page}</span>) page is not Found-404</h5>
                <img className='img-fluid' style={{height: '400px', position:'relative', top: '150px'}} src={notFound} alt=""/>
            </div>
        </div>
    );
};

export default NotFound;