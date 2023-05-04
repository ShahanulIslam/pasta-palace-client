import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const { id, name, picture, years_of_experience, likes, num_of_recipes, bio } = chefDetails;
    const chefRecipes = chefDetails.recipes;
    return (
        <div className='mt-10'>
            <div>
                <h2 className='text-center text-3xl font-bold'>Details of {name}</h2>
            </div>
            <div className="card card-side bg-base-100 shadow-xl mt-7 w-4/5 mx-auto py-5">
                <div className='w-1/2 p-3 '>
                    <figure className='p-4'><img src={picture} alt="" /></figure>
                    <div className='flex justify-between mt-4'>
                        <p>{years_of_experience} Years Experience </p>
                        <p className='flex justify-center items-center'><AiFillLike className='me-1'></AiFillLike>{likes}</p>
                        <p>Recipes : {num_of_recipes}</p>
                    </div>
                </div>
                <div className="card-body w-1/2 space-y-2">
                    <h2 className=' text-2xl font-bold'>Chef Name : {name}</h2>
                    <h4><span className=' font-bold'>Bio :</span>{bio}</h4>
                    <h4><span className='font-bold'>Experience : </span>{years_of_experience}</h4>
                    <h4><span className='font-bold'>Recipe : </span>{num_of_recipes}</h4>    
                </div>
            </div>
            <div className="mt-8">
                <h2 className='font-semibold text-center text-3xl'>Some of My recipes</h2>
                <div className='grid md:grid-cols-1 gap-6 w-4/5 mx-auto mt-5'>
                    {
                        chefRecipes.map(chefRecipe =>  <Recipe
                        chefRecipe={chefRecipe}
                        ></Recipe>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;