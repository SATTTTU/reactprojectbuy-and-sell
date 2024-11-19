import React, { useState } from 'react';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: 'Shipping' },
    { id: 2, title: 'Payment' },
    { id: 3, title: 'Confirmations' },
    { id: 4, title: 'Completed' },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Shipping Information</h3>
              <div className="p-6">
            <div className="mb-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Shipping Information</h3>
                <p><strong>First Name:</strong> Priya</p>
                <p><strong>Mobile Number:</strong> 970000000</p>
                <p><strong>Pincode:</strong> 625014</p>
                <p><strong>Email:</strong> user@gmail.com</p>
                <p><strong>Flat / House No. / Floor / Building:</strong> #33/5</p>
                <p><strong>Colony / Street / Locality:</strong> Roja 1st Street</p>
                <p><strong>Landmark:</strong> Murugan Temple</p>
              </div>
              <button 
                className="bg-blue-500 text-white py-2 px-4 rounded" 
                data-toggle="modal" 
                data-target="#myModal"
              >
                Edit
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" className="form-input mt-1 block w-full" placeholder="First Name" />
              <input type="text" className="form-input mt-1 block w-full" placeholder="Mobile Number" />
              <input type="text" className="form-input mt-1 block w-full" placeholder="Pincode" />
              <input type="email" className="form-input mt-1 block w-full" placeholder="Email address" />
              <input type="text" className="form-input mt-1 block w-full" placeholder="Flat / House No. / Floor / Building" />
              <input type="text" className="form-input mt-1 block w-full" placeholder="Colony / Street / Locality" />
              <input type="text" className="form-input mt-1 block w-full" placeholder="Landmark" />
            </div>
          </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Payment Information</h3>
            <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="inline-flex items-center">
                  <input type="radio" name="paymentMethod" className="form-radio" />
                  <span className="ml-2">Credit Card</span>
                </label>
                <input type="text" className="form-input mt-1 block w-full" placeholder="Name on Card" />
                <input type="text" className="form-input mt-1 block w-full" placeholder="Card Number" />
                <div className="flex gap-4">
                  <select className="form-select mt-1 block w-1/2">
                    <option>Month</option>
                    {[...Array(12).keys()].map(num => <option key={num+1}>{num+1}</option>)}
                  </select>
                  <select className="form-select mt-1 block w-1/2">
                    <option>Year</option>
                    {[...Array(10).keys()].map(num => <option key={2022 + num}>{2022 + num}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="radio" name="paymentMethod" className="form-radio" />
                  <span className="ml-2">Debit Card</span>
                </label>
                <select className="form-select mt-1 block w-full">
                  <option>-- Debit Card --</option>
                  <option>All Visa/MasterCard Debit Card</option>
                  <option>All Rupay Debit Cards</option>
                  <option>All SBI Maestro Debit Cards</option>
                </select>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="radio" name="paymentMethod" className="form-radio" />
                  <span className="ml-2">Net Banking</span>
                </label>
                <select className="form-select mt-1 block w-full">
                  <option>-- Net Banking --</option>
                  <option>Allahabad Bank</option>
                  <option>Andhra Bank</option>
                  <option>Airtel Payments Bank</option>
                </select>
              </div>
            </div>
          </div>
          </div>
        );
      case 3:
        return (
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Order Confirmation</h3>
            <div className="p-6">
            <div className="mb-6">
              <h5 className="text-lg font-bold">Shipping Address</h5>
              <p>Name: John Albert</p>
              <p>Address: #33, Kaveri nadhi st, KK nagar, Madurai - 02</p>
            </div>
            <div className="mb-6">
              <h5 className="text-lg font-bold">Payment Method</h5>
              <p>Net Banking: Allahabad Bank</p>
            </div>
            <div>
              <h5 className="text-lg font-bold">Order Summary</h5>
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Product</th>
                    <th className="py-2 px-4 border-b">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Sunflower Oil</td>
                    <td className="py-2 px-4 border-b">$45</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Sun Rich Oil</td>
                    <td className="py-2 px-4 border-b">$90</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-bold">Total</td>
                    <td className="py-2 px-4 border-b font-bold">$135</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          </div>
        );
      case 4:
        return (
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Completed</h3>
            
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="wizard">
        <div className="wizard-inner mb-6">
          <ul className="flex justify-between mb-6">
            {steps.map((step) => (
              <li key={step.id} className={`flex-1 text-center ${currentStep === step.id ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'} p-2 rounded`}>
                <a 
                  href={`#step${step.id}`} 
                  role="tab" 
                  aria-controls={`step${step.id}`} 
                  title={step.title}
                  className="block"
                  onClick={(e) => e.preventDefault()}
                >
                  <h3 className="text-sm md:text-lg font-bold">{step.title}</h3>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <form role="form">
          <div className="tab-content">
            {renderStepContent()}
            <div className="flex justify-between mt-6">
              {currentStep > 1 && (
                <button 
                  type="button" 
                  className="bg-gray-500 text-white py-2 px-4 rounded" 
                  onClick={handlePrev}
                >
                  Previous
                </button>
              )}
              {currentStep < steps.length && (
                <button 
                  type="button" 
                  className="bg-blue-500 text-white py-2 px-4 rounded" 
                  onClick={handleNext}
                >
                  Next
                </button>
              )}
              {currentStep === steps.length && (
                <button 
                  type="button" 
                  className="bg-green-500 text-white py-2 px-4 rounded" 
                  onClick={handleNext}
                >
                  Finish
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
