import React from "react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 text-center p-6">
      <h1 className="text-6xl font-bold text-green-700">404</h1>
      <p className="text-2xl text-gray-600 mt-4">Oops! Page not found.</p>
      <p className="text-gray-500 mb-6">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all">
        Go Back Home
      </Link>
    </div>
  );
}
