import React, { useEffect, useState } from 'react';
import bg from "../../assets/banner-bg.jpg"
import chef from "../../assets/chef.png"
import Chef from '../../Components/Chef/Chef';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chefs = useLoaderData()

    return (
        <div>
            <div className="banner relative">
                <div className='bg-fixed' style={{
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '550px'
                }}>

                </div>
                <div className="banner-content absolute top-0 bg-black h-[550px] bg-opacity-40 flex w-full px-14">
                    <div className='w-1/2 text-white my-auto'>
                        <h1 className='text-6xl font-bold mb-4'>Experience the Ultimate in Fine Dining with Pasta Palace</h1>
                        <p>At Pasta Palace, we are passionate about creating unforgettable culinary experiences. From our locally-sourced ingredients to our expertly crafted dishes, we are dedicated to delivering exceptional quality and flavor to every guest.</p>
                    </div>
                    <div className='w-1/2'>
                        <img className='max-w-full mx-auto	max-h-full' src={chef} alt="" />
                    </div>
                </div>
            </div>
            <div className='mt-9'>
                <div className='text-center'>
                    <h2 className='font-semibold text-2xl'>Meet Our Talented Chefs: Learn More About Our Culinary Experts</h2>
                    <p className='my-3'> Our team of talented chefs brings years of experience and passion to our kitchen. <br /> From classic dishes to innovative creations, they are dedicated to crafting the perfect meal for every guest.</p>
                </div>
                <div className='grid grid-cols-3 gap-4 mt-10 px-10'>
                    {chefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    >

                    </Chef>)}
                </div>
            </div>
        </div>
    );
};

export default Home;