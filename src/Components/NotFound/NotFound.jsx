import React from 'react';
import img from "../../assets/404.png"

const NotFound = () => {
    return (
        <div className='h-[500px] mt-36'>
            <div className='flex justify-center items-center text-8xl font-bold'>
                <div>4</div>
                <div><img className='w-20' src={img} alt="" /></div>
                <div>4</div>
            </div>
            <h1 className='text-4xl text-center mt-5 font-semibold'>Page is not found</h1>
        </div>
    );
};

export default NotFound;