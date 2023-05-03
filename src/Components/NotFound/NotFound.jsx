import React from 'react';

const NotFound = () => {
    return (
        <div>
            <div class="flex flex-col h-screen justify-center items-center px-4">
                <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-4">404 Not Found</h1>
                <p class="text-lg md:text-2xl text-gray-700 mb-8 text-center">Sorry, the page you are looking for does not exist.</p>
                <a href="/" class="bg-violet-500 hover:bg-violet-600 text-white font-semibold py-3 px-8 rounded">Go back to homepage</a>
            </div>

        </div>
    );
};

export default NotFound;