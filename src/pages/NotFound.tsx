import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-6xl font-bold text-darkOrange">404</h1>
            <p className="mt-4 text-lg text-gray-600 mx-5">
                Oops! The page you're looking for doesn't exist.
            </p>
            <Link
                to="/"
                className="mt-6 px-4 py-2 text-white bg-darkOrange rounded hover:bg-orange-500"
            >
                Go Back to Home
            </Link>
        </div>
    );
};

export default NotFound;