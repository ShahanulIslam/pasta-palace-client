import React from 'react';
import { AiFillLike } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { id, name, picture, years_of_experience, likes, num_of_recipes } = chef;


    return (
        <div className="card card-compact w-full sm:w-96 bg-base-100 shadow-xl p-5">
            <figure>
                <img src={picture} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title justify-center mb-2">{name}</h2>
                <div className="flex flex-col sm:flex-row justify-center">
                    <p className="text-sm text-center sm:text-left mb-2 sm:mb-0">{years_of_experience} Years Experience</p>
                    <p className="text-sm text-center sm:text-left mb-2 sm:mb-0 flex items-center justify-center">
                        <AiFillLike className="me-1" />
                        {likes}
                    </p>
                    <p className="text-sm text-center sm:text-left">{num_of_recipes} Recipes</p>
                </div>
                <div className="card-actions justify-center mt-5">
                    <Link to={`chefdetails/${id}`}>
                        <button className="btn btn-primary">View Recipes</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Chef;