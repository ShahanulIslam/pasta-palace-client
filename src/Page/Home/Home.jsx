import React, { useEffect, useState } from 'react';
import bg from "../../assets/banner-bg.jpg"
import chef from "../../assets/chef.png"
import Chef from '../../Components/Chef/Chef';
import { useLoaderData } from 'react-router-dom';
import Foods from '../../Components/Foods/Foods';

const Home = () => {
    const chefs = useLoaderData()
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch("https://chef-recipe-hunter-server-shahanulislam.vercel.app/foods")
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

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
                <div className="banner-content absolute top-0 bg-black h-[550px] bg-opacity-40 flex   w-full px-14">
                    <div className='w-1/2 text-white my-auto'>
                        <h1 className='text-6xl font-bold mb-4'>Experience the Ultimate in Fine Dining with Pasta Palace</h1>
                        <p>At Pasta Palace, we are passionate about creating unforgettable culinary experiences. From our locally-sourced ingredients to our expertly crafted dishes, we are dedicated to delivering exceptional quality and flavor to every guest.</p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img className='max-w-full mx-auto	max-h-full' src={chef} alt="" />
                    </div>
                </div>
            </div>
            <div className='mt-9'>
                <div className='text-center'>
                    <h2 className='font-semibold sm:text-3xl md:text-4xl text-2xl'>Meet Our Talented Chefs: Learn More About Our Culinary Experts</h2>
                    <p className='my-3 text-sm  md:text-lg'> Our team of talented chefs brings years of experience and passion to our kitchen. From classic dishes to innovative <br /> creations, they are dedicated to crafting the perfect meal for every guest.</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:px-8 gap-3 mt-10 '>
                    {chefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    >
                    </Chef>)}
                </div>
            </div>
            <div className='my-10 w-11/12 mx-auto'>
                <div className='text-center space-y-2'>
                    <h2 className='font-bold text-2xl '>Savor the flavor</h2>
                    <p className='font-semibold'>Delicious Recipes for Every Occasion</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-4'>
                    {
                        foods.map(food => <Foods
                            key={food.id}
                            food={food}
                        ></Foods>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;