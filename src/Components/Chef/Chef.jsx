import React from 'react';

const Chef = ({ chef }) => {
    const { name, picture, years_of_experience, likes, num_of_recipes
    } = chef

    console.log(chef)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-5">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <div className='flex'>
                    <p>{years_of_experience} Years Experience </p>
                    <p>{likes}</p>
                    <p>Recipes : {num_of_recipes}</p>
                </div>
                <div className="card-actions justify-center mt-5">
                    <button className="btn btn-primary">View Recipes</button>
                </div>
            </div>
        </div>
    );
};

export default Chef;