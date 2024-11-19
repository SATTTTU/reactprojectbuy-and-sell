import React from 'react';

function Wishlist() {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Wishlist</h1>
      <div className="text-center text-gray-600">
        <p className="mb-4">Your Wishlist is currently empty.</p>
        <p>
          <a href="/" className="text-green-500 hover:underline">Return To Shop</a>
        </p>
      </div>
    </div>
  );
}

export default Wishlist;
