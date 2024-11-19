import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Component/CartContext";

function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateSubtotal(state.cartItems);
    calculateTotal(state.cartItems);
  }, [state.cartItems]);

  const calculateSubtotal = (items) => {
    let sub = 0;
    items.forEach((item) => {
      sub += item.price * item.quantity; // Adjusted to consider quantity
    });
    setSubtotal(sub);
  };

  const calculateTotal = (items) => {
    let tot = 0;
    items.forEach((item) => {
      tot += item.price * item.quantity; // Adjusted to consider quantity
    });
    setTotal(tot);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Product</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Quantity</th>
              <th className="py-3 px-4 text-left">Subtotal</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.cartItems.map((item) => (
              <tr key={item.id}>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-gray-600 text-sm">
                        Quis aute iure reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">${item.price.toFixed(2)}</td>
                <td className="py-4 px-4">
                  <input
                    type="number"
                    className="w-full text-center border border-gray-300 rounded"
                    value={item.quantity}
                    min="1"
                    readOnly
                  />
                </td>
                <td className="py-4 px-4">${(item.price * item.quantity).toFixed(2)}</td>
                <td className="py-4 px-4 text-center">
                  <button
                    className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700 transition duration-300"
                    onClick={() =>
                      dispatch({ type: "removefromcart", payload: item })
                    }
                  >
                    <i className="fa fa-trash-o" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5" className="py-4 px-4 text-right">
                <Link
                  to="/Shop"
                  className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300"
                >
                  <i className="fa fa-angle-left" /> Continue Shopping
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="py-4 px-4"></td>
              <td className="py-4 px-4 text-right">
                <strong>Total: ${subtotal.toFixed(2)}</strong>
              </td>
              <td className="py-4 px-4 text-center">
                <Link
                  to="/CheckOut"
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
                >
                  Checkout <i className="fa fa-angle-right" />
                </Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Cart;
