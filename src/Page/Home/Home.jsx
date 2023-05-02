import React from 'react';
import bg from "../../assets/banner-bg.jpg"
import chef from "../../assets/chef.png"

const Home = () => {
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
                        <h1 className='text-6xl font-bold mb-4'>Indulge in Deliciousness with TastyTable</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quaerat sapiente assumenda iure consequuntur sunt optio molestias modi autem. Ipsam!</p>
                    </div>
                    <div className='w-1/2'>
                        <img className='max-w-full mx-auto	max-h-full' src={chef} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;