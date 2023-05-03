import React from 'react';
import { AiFillLike } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { id,name, picture, years_of_experience, likes, num_of_recipes} = chef;


    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-5">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <div className='flex'>
                    <p>{years_of_experience} Years Experience </p>
                    <p className='flex justify-center items-center'><AiFillLike className='me-1'></AiFillLike>{likes}</p>
                    <p>Recipes : {num_of_recipes}</p>
                </div>
                <div className="card-actions justify-center mt-5">
                   <Link to={`chefdetails/${id}`}> <button className="btn btn-primary">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;