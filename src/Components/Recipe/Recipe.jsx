import React from 'react';

const Recipe = ({ chefRecipe }) => {
    console.log(chefRecipe)
    const { name, recipe_img, ingredients, cooking_method, rating, favorite } = chefRecipe
    return (
        <div className="card card-side bg-base-300 shadow-xl p-3 rounded-lg ">
            <div className='w-1/2'>
                <figure><img src={recipe_img} alt="" /></figure>
            </div>
            <div className="card-body w-1/2">
                <h2 className="card-title"><span className='font-semibold'>Recipe name :</span>{name}</h2>
                <p><span className=' font-semibold'>Cooking Method : </span>{cooking_method}</p>
                <h2><span className='font-semibold'>Ingredients :</span>
                    {
                        ingredients.map((ingredient, index) => {
                            return <ol>
                                <li>{index + 1}. {ingredient}</li>
                            </ol>
                        })
                    }
                </h2>
                <p>{rating}</p>

            </div>
        </div>
    );
};

export default Recipe;