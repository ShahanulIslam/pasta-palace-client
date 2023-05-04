import React from 'react';

const Blog = () => {
    return (
        <div className="max-w-5xl mx-auto p-6 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4 text-center">Here Some Question</h1>

            <div className="my-8">
                <h2 className="text-xl font-bold mb-2">1. Differences between uncontrolled and controlled components?</h2>
                <p className="text-sm md:text-base">
                    Controlled components are those whose value is controlled by the parent component through props, and changes to the value of the component can only be made through a change in the parent state. Uncontrolled components, on the other hand, allow the user to control the value of the component directly, without interference from the parent component.
                </p>
            </div>

            <div className="my-8">
                <h2 className="text-xl font-bold mb-2">2. How to validate React props using PropTypes?</h2>
                <p className="text-sm md:text-base">
                    PropTypes is a typechecking library that can be used to validate the types of props being passed to a component. To use PropTypes, you must first import it from the 'prop-types' package. Then, you can define the expected props for your component using the propTypes object, which contains the name and type of each prop.
                </p>
            </div>

            <div className="my-8">
                <h2 className="text-xl font-bold mb-2">3. Difference between Node.js and Express.js?</h2>
                <p className="text-sm md:text-base">
                    Node.js is a JavaScript runtime that allows you to run JavaScript code outside of a web browser. Express.js is a web application framework built on top of Node.js, which provides a set of tools and features to help you build web applications.
                </p>
            </div>

            <div className="my-8">
                <h2 className="text-xl font-bold mb-2">4.What is a custom hook, and why will you create a custom hook?</h2>
                <p className="text-sm md:text-base">
                    A custom hook is a function that uses React's built-in hooks to provide some functionality that can be shared across multiple components. Custom hooks can be used to abstract away complex logic and provide a cleaner and more reusable codebase. You might create a custom hook to handle things like form validation, data fetching, or authentication logic.
                </p>
            </div>
        </div>


    );
};

export default Blog;