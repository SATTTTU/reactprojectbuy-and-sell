// src/components/OrderTracking.js

import React from 'react';

const trackingData = [
  { id: 1, status: 'Dispatched from distributor address', distributor: 'Grocery Mart', dateTime: '31/07/2023 22:24:PM' },
  { id: 2, status: 'Dispatched from some address', distributor: 'Grocery Mart', dateTime: '31/07/2024 22:24:PM' },
  { id: 3, status: 'Dispatched from Kathmandu address', distributor: 'Grocery Mart', dateTime: '31/07/2024 21:24:PM' },
  { id: 4, status: 'Dispatched from Bhaktapur address', distributor: 'Grocery Mart', dateTime: '31/07/2024 11:24:PM' },
  { id: 5, status: 'Dispatched from Lalitpur address', distributor: 'Grocery Mart', dateTime: '31/07/2024 22:24:PM' },
  
];

const TrackingData = () => {
  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-4">Order Tracking</h3>
      <table className="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2"></th>
            <th className="p-2 text-left">S No</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Distributor</th>
            <th className="p-2 text-left">Date/Time</th>
          </tr>
        </thead>
        <tbody>
          {trackingData.map((item, index) => (
            <tr key={item.id} className={index === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="p-2 text-center relative">
                
                {index < trackingData.length - 1 && (
                  <div className={`absolute left-1/2 transform -translate-x-1/2 bg-gray-500 h-full w-[2px] ${index === 0 ? 'top-6' : 'top-0'}`}></div>
                )}
              </td>
              <td className="p-2 text-center">{item.id}</td>
              <td className="p-2">{item.status}</td>
              <td className="p-2">{item.distributor}</td>
              <td className="p-2">{item.dateTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrackingData;
