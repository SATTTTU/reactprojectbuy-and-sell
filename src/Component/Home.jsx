import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import image from '../assets/image1.jpg'; // Ensure the correct path
import image2 from '../assets/imag2.jpg'; // Ensure the correct path

function Home() {
  const categoryImages = [
    "https://static.vecteezy.com/system/resources/previews/006/792/817/non_2x/shopping-cart-food-basket-set-for-grocery-shopping-vector.jpg",
    "https://img.freepik.com/premium-photo/shopping-cart-with-cart-full-food-jar-vegetables_905683-3093.jpg",
    "https://sangalotech.com/buy/assets/img/s-product/category3.jpg",
    "https://sangalotech.com/buy/assets/img/s-product/category6.jpg",
    "https://sangalotech.com/buy/assets/img/s-product/category7.jpg",
    "https://sangalotech.com/buy/assets/img/s-product/category1.jpg",
    "https://sangalotech.com/buy/assets/img/s-product/category4.jpg",
    "https://sangalotech.com/buy/assets/img/s-product/category5.jpg",
    "https://sangalotech.com/buy/assets/img/s-product/category6.jpg",
    "https://sangalotech.com/buy/assets/img/s-product/category7.jpg",
    "https://sangalotech.com/buy/assets/img/s-product/category8.jpg",
    "https://sangalotech.com/buy/assets/img/s-product/category9.jpg",
  ];

  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const handleToggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(prev => (prev === dropdown ? null : dropdown));
  };

  return (
    <>
      <section className="navbar py-4 bg-[#72BF4F] text-white">
        <div className="container mx-auto flex flex-wrap justify-between items-center relative">
          <button
            className="bg-[#5A9B48] text-white px-6 py-3 rounded-xl mb-4 md:mb-0 flex items-center hover:bg-[#4a8b3c] transition-colors"
            onClick={handleToggleCategories}
            aria-label="Toggle categories"
          >
            <i className="fa-solid fa-bars mr-2" /> All Categories
          </button>
          <nav className="w-full md:w-auto hidden md:block relative">
            <ul className="flex flex-wrap gap-4 justify-center md:justify-start md:gap-6">
              {[
                { name: 'Home', icon: 'fa-house', link: '/' },
                { name: 'Shop', icon: 'fa-cart-shopping', link: '/shop', dropdown: ['Shop 1', 'Shop 2'] },
                { name: 'Bakery', icon: 'fa-cake-candles', link: '/bakery', dropdown: ['Bake 1', 'Bake 2'] },
                { name: 'Beverages', icon: 'fa-mug-hot', link: '/beverages', dropdown: ['Category 1', 'Category 2'] },
                { name: 'Blog', icon: 'fa-blog', link: '/blog' },
                { name: 'Contact', icon: 'fa-phone', link: '/contact' },
              ].map(({ name, icon, link, dropdown }, index) => (
                <li key={index} className="relative text-white px-4 py-2 rounded-full bg-[#5A9B48] hover:bg-[#4a8b3c] cursor-pointer transition-colors"
                    onClick={() => dropdown && toggleDropdown(name.toLowerCase())}>
                  <i className={`fa-solid ${icon} mr-2`} /> {name}
                  {dropdown && (
                    <>
                      <i className="fa-solid fa-caret-down ml-2" />
                      {activeDropdown === name.toLowerCase() && (
                        <ul className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50 w-48">
                          {dropdown.map((item, i) => (
                            <li key={i} className="px-4 py-2 bg-[#72BF4F] text-white hover:bg-[#5a9b48] transition-colors rounded-t-md">
                              <Link to={`${link}/${item.replace(' ', '').toLowerCase()}`}>{item}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {showCategories && (
       <aside className="fixed inset-0 bg-white z-50 p-5 md:hidden transition-transform transform translate-x-full md:translate-x-0 ease-in-out duration-300">
       <button
         className="absolute top-5 right-5 text-2xl text-gray-600 hover:text-gray-800 transition-colors"
         onClick={handleToggleCategories}
         aria-label="Close categories"
       >
         &times;
       </button>
       <div className="h-full flex flex-col">
         <ul className="flex-1 overflow-y-auto">
           {categories.slice(0, 9).map((category, index) => (
             <li key={index} className="px-4 py-2 bg-[#72BF4F] text-white hover:bg-[#5a9b48] transition-colors rounded-md">
               <Link to={`/Category/${category.name}`} className="block">{category.name}</Link>
             </li>
           ))}
         </ul>
       </div>
     </aside>
      )}

      <section className="flex flex-col md:flex-row">
        <div className={`w-full sm:w-1/4 ${showCategories ? 'block' : 'hidden sm:hidden'}`}>
          <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
            {categories.slice(0, 9).map((category, index) => (
              <li key={index} className="px-4 py-2 transition-colors hover:bg-gray-200">
                <Link to={`/category/${category.name}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-3/4 relative">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            className="relative z-10"
          >
            {[{ src: image, alt: 'Image 1', title: 'Discover New Foods', description: 'Explore the best places to eat with our guided tours.', buttonText: 'Learn More' },
              { src: image2, alt: 'Image 2', title: 'Find Your Dream Food', description: 'Browse through a wide range of properties.', buttonText: 'View Listings' },
              { src: image, alt: 'Image 3', title: 'Explore Amazing Restaurants', description: 'Discover foods that will take your breath away.', buttonText: 'Start Exploring' }].map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <img src={slide.src} alt={slide.alt} className="w-full h-auto object-cover rounded-lg" onError={(e) => e.target.src = 'fallback-image-url.jpg'} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 text-white text-center p-6">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h1>
                    <p className="text-sm md:text-lg mb-6">{slide.description}</p>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="py-5">
        <div className="container mx-auto">
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="mySwiper1"
          >
            {categoryImages.map((src, index) => (
              <SwiperSlide key={index} className="relative">
                <div className="relative">
                  <img src={src} alt={`Category ${index + 1}`} className="w-full h-auto object-cover rounded-lg" onError={(e) => e.target.src = 'fallback-image-url.jpg'} />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
                    <h2 className="text-lg md:text-xl font-bold">Category {index + 1}</h2>
                    <p>{index + 1} items</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Home;
