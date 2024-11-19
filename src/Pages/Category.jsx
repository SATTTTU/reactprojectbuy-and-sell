import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../Component/CartContext';

function Category() {
    const { state, dispatch } = useContext(CartContext);
    let { cid } = useParams();
    let [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${cid}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setData(data.products || []);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, [cid]);

    const handleAddToCart = (product) => {
        dispatch({ type: "addtocart", payload: { ...product, quantity: 1 } });
    };

    return (
        <section className='py-8 px-4'>
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-6 text-center">{cid}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data.slice(0, 20).map((product) => (
                        <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
                            <div className="relative">
                                <Link to={`/ProductDetails/${product.id}`}>
                                    <img className="w-full h-48 object-cover object-center" src={product.thumbnail} alt={product.title} />
                                </Link>
                                <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <ul className="flex space-x-2">
                                        <li>
                                            <Link to={`/ProductDetails/${product.id}`} className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                                                <i className="fa fa-search text-gray-800" />
                                            </Link>
                                        </li>
                                        <li>
                                            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                                                <i className="fa fa-heart text-gray-800" />
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
                                                onClick={() => handleAddToCart(product)}
                                            >
                                                <i className="fa fa-shopping-cart text-gray-800" />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                {product.sale && (
                                    <span className="absolute top-0 left-0 bg-red-600 text-white text-xs font-semibold px-2 py-1">Sale</span>
                                )}
                                {product.discount && (
                                    <span className="absolute top-0 right-0 bg-green-600 text-white text-xs font-semibold px-2 py-1">{product.discount}% Off</span>
                                )}
                            </div>
                            <div className="p-4">
                                <ul className="flex text-yellow-400 mb-2">
                                    {[...Array(5)].map((_, index) => (
                                        <li key={index} className={`fa fa-star ${index < product.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
                                    ))}
                                </ul>
                                <h3 className="text-lg font-semibold mb-2">
                                    <Link to={`/ProductDetails/${product.id}`} className="hover:text-gray-600">{product.title}</Link>
                                </h3>
                                <div className="text-gray-800">
                                    <span className="text-red-600 text-xl font-bold">${product.price.toFixed(2)}</span>
                                    {product.discount && (
                                        <span className="line-through ml-2 text-gray-500">${(product.price * 1.2).toFixed(2)}</span>
                                    )}
                                </div>
                                <button
                                    className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    + Add To Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Category;
