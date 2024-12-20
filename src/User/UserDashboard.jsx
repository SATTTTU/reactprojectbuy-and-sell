import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/Auth.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function UserDashboard() {
  const [auth, setAuth] = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated fetch for transactions and activities
    const fetchUserData = async () => {
      try {
        setLoading(true);

        // Simulate API calls
        const transactionData = [
          {
            id: 1,
            date: "2024-12-15",
            items: 3,
            total: "$120.00",
            status: "Delivered",
          },
          {
            id: 2,
            date: "2024-12-10",
            items: 1,
            total: "$45.00",
            status: "Shipped",
          },
        ];

        const activityData = [
          { id: 1, action: "Added item to cart", date: "2024-12-16" },
          { id: 2, action: "Checked out order #1", date: "2024-12-15" },
          { id: 3, action: "Updated shipping address", date: "2024-12-14" },
        ];

        // Set data
        setTransactions(transactionData);
        setActivities(activityData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Welcome, {auth?.user?.name || "User"}!
      </h1>

      {/* Transactions Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Recent Transactions
        </h2>
        {loading ? (
          <p className="text-gray-500">Loading transactions...</p>
        ) : transactions.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Items</th>
                  <th className="py-3 px-4 text-left">Total</th>
                  <th className="py-3 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-4">{transaction.date}</td>
                    <td className="py-3 px-4">{transaction.items}</td>
                    <td className="py-3 px-4">{transaction.total}</td>
                    <td
                      className={`py-3 px-4 ${
                        transaction.status === "Delivered"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {transaction.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">No recent transactions.</p>
        )}
      </section>

      {/* Activities Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Recent Activities
        </h2>
        {loading ? (
          <p className="text-gray-500">Loading activities...</p>
        ) : activities.length > 0 ? (
          <ul className="bg-white shadow-md rounded-lg p-4">
            {activities.map((activity) => (
              <li
                key={activity.id}
                className="flex justify-between items-center border-b border-gray-200 py-3"
              >
                <p className="text-gray-700">{activity.action}</p>
                <span className="text-gray-500 text-sm">{activity.date}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No recent activities.</p>
        )}
      </section>

      {/* Recommended Products Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Recommended Products
        </h2>
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="mySwiper"
        >
          {[...Array(10)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md rounded-lg p-4">
                <img
                  src={`https://via.placeholder.com/150?text=Product+${index + 1}`}
                  alt={`Product ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  Product {index + 1}
                </h3>
                <p className="text-gray-500">$10.00</p>
                <button className="mt-2 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

export default UserDashboard;
