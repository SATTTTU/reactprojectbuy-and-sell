import React from 'react';

function Profile() {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600" htmlFor="fname">First name</label>
            <input type="text" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-green-500" id="fname" />
          </div>
          <div>
            <label className="block text-sm text-gray-600" htmlFor="lname">Last name</label>
            <input type="text" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-green-500" id="lname" />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-600" htmlFor="email">Email address</label>
          <input type="email" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-green-500" id="email" />
        </div>
        <div>
          <label className="block text-sm text-gray-600" htmlFor="password">Password</label>
          <input type="password" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-green-500" id="password" />
        </div>
        <div>
          <label className="block text-sm text-gray-600" htmlFor="message">What do you want</label>
          <textarea className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-green-500" id="message" cols={30} rows={5}></textarea>
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Login</button>
      </form>
      <div className="mt-4 text-center">
        <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Forgot your password?</a>
      </div>
    </div>
  );
}

export default Profile;
