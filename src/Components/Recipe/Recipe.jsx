import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Recipe = ({ chefRecipe }) => {
    const [favorite,setFavorite] =useState(true)
    const handleFavorite = () =>{
       setFavorite(false); 
       toast('Added to favorite!') 
    }

    const { name, recipe_img, ingredients, cooking_method, rating } = chefRecipe
    return (
        <div className="card card-side  bg-base-300 shadow-xl p-3 rounded-lg ">
            <div className='w-1/2 mt-8'>
                <figure><img src={recipe_img} alt="" /></figure>
            </div>
            <div className="card-body w-1/2">
                <h2 className="card-title"><span className='font-semibold'>Recipe name :</span>{name}</h2>
                <h4><span className=' font-semibold'>Cooking Method : </span>{cooking_method}</h4>
                <h2><span className='font-semibold'>Ingredients :</span>
                    {
                        ingredients.map((ingredient, index) => {
                            return <ol>
                                <li>{index + 1}. {ingredient}</li>
                            </ol>
                        })
                    }
                </h2>
                <div className='flex items-center justify-between'>
                    <div className='flex'>
                        <span><Rating style={{ maxWidth: 100 }}
                            value={Math.round(rating) || 0}
                            readOnly /></span>
                        <span className='ms-2'>{rating}</span>
                    </div>
                    <div>
                        <button onClick={handleFavorite} disabled={!favorite} className='btn btn-accent'>Favorite</button>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;