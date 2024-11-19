import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import banner from '../assets/banner.jpg';
import "./Shop.css";

function Shop() {
  const { state, dispatch } = useContext(CartContext);
  const { cid } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result.products);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch({ type: "addtocart", payload: { ...product, quantity: 1 } });
  };

  const ratings = [
    { stars: 5, width: '80%', color: 'bg-green-500' },
    { stars: 4, width: '60%', color: 'bg-green-400' },
    { stars: 3, width: '40%', color: 'bg-blue-400' },
    { stars: 2, width: '20%', color: 'bg-yellow-500' },
    { stars: 1, width: '15%', color: 'bg-red-500' },
  ];

  const images = [
    {
      src: 'https://www.shutterstock.com/image-photo/shopping-cart-full-food-supermarket-260nw-350102345.jpg',
      title: 'Image 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      btnText: 'View Details'
    },
    {
      src: 'https://www.shutterstock.com/image-illustration/shopping-basket-full-variety-grocery-260nw-1974727070.jpg',
      title: 'Image 2',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      btnText: 'Explore'
    },
    {
      src: 'https://www.shutterstock.com/image-photo/shopping-cart-full-food-supermarket-260nw-350102345.jpg',
      title: 'Image 3',
      description: 'Nulla facilisi. Curabitur auctor ante in est euismod, at tempus urna pellentesque.',
      btnText: 'Learn More'
    },
    {
      src: 'https://www.shutterstock.com/image-illustration/shopping-basket-full-variety-grocery-260nw-1974727070.jpg',
      title: 'Image 4',
      description: 'Suspendisse potenti. Vestibulum congue lectus sit amet est vehicula aliquet.',
      btnText: 'Discover'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-cover bg-center py-8" style={{ backgroundImage: `url(${banner})` }}>
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Shop</h1>
        </div>
      </section>

      {/* Product Description Section */}
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h5 className="text-xl font-semibold text-red-600">OUR PRODUCTS</h5>
          <p className="mt-2">
            Consectetuer sociis mauris eu augue velit pulvinar ullamcorper
            in ac mauris ac vel, interdum sed malesuada curae sit amet non
            nec quis arcu massa.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">{cid}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.slice(0, 20).map((product) => (
              <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden relative group">
                <a href="#">
                  <img className="w-full h-48 object-cover object-center" src={product.thumbnail} alt={product.title} onError={(e) => e.target.src = 'fallback-image-url.jpg'} />
                </a>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                  <ul className="flex space-x-2">
                    <li>
                      <Link to="/ProductDetails" className="bg-white p-2 rounded-full shadow-md" aria-label="Quick View">
                        <i className="fa fa-search text-gray-800" />
                      </Link>
                    </li>
                    <li>
                      <a href="#" className="bg-white p-2 rounded-full shadow-md" aria-label="Add to Wishlist">
                        <i className="fa fa-shopping-bag text-gray-800" />
                      </a>
                    </li>
                    <li>
                      <Link
                        to="/Cart"
                        className="bg-white p-2 rounded-full shadow-md"
                        aria-label="Add to Cart"
                        onClick={() => handleAddToCart(product)}
                      >
                        <i className="fa fa-shopping-cart text-gray-800" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <span className="absolute top-0 left-0 bg-red-600 text-white text-xs font-semibold px-2 py-1">Sale</span>
                <span className="absolute top-0 right-0 bg-green-600 text-white text-xs font-semibold px-2 py-1">20%</span>
                <div className="p-4">
                  <ul className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <li key={i} className={`fa fa-star ${i < 4 ? '' : 'text-gray-300'}`} />
                    ))}
                  </ul>
                  <h3 className="text-lg font-semibold mb-2">
                    <a href="#" className="hover:text-gray-600">{product.title}</a>
                  </h3>
                  <div className="text-gray-800">
                    <span className="text-red-600">${product.price.toFixed(2)}</span>
                    <span className="line-through ml-2">${(product.price * 1.2).toFixed(2)}</span>
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

      {/* Ratings Section */}
      <section className="py-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:w-1/2 flex flex-col items-center justify-center p-6 bg-gray-100">
              <h1 className="text-6xl font-bold mb-2">4.0</h1>
              <div className="flex text-yellow-500 text-2xl mb-2">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="material-icons">star</span>
                ))}
                <span className="material-icons">star_border</span>
              </div>
              <div className="text-gray-600">
                <span className="material-icons">person</span> 1,050,008 total
              </div>
            </div>
            <div className="md:w-1/2 p-6">
              <div className="space-y-4">
                {ratings.map((rating, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-1/4 text-right pr-2 text-xl text-gray-700">
                      <span className="material-icons">{rating.stars} star</span>
                    </div>
                    <div className="w-3/4">
                      <div className="bg-gray-300 rounded h-4">
                        <div
                          className={`${rating.color} h-4 rounded`}
                          style={{ width: rating.width }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Images Section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img className="w-full h-48 object-cover object-center" src={image.src} alt={image.title} onError={(e) => e.target.src = 'fallback-image-url.jpg'} />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{image.title}</h2>
                  <p className="text-gray-600 mb-4">{image.description}</p>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                    {image.btnText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;
