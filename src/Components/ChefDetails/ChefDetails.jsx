import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const { id,name, picture, years_of_experience, likes, num_of_recipes
    } = chefDetails;
    return (
        <div>
            <h2 className='text-center'>Details of {name}</h2>
        </div>
    );
};

export default ChefDetails;