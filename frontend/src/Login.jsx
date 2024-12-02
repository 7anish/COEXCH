import React, { useState } from "react";
import emailjs from '@emailjs/browser'

const LoginPage = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [demoName, setDemoName] = useState("");
  const [demoMobile, setDemoMobile] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleDemoFormSubmit = (e) => {
    e.preventDefault();

    if (!demoName || !demoMobile) {
      alert("Please fill in all fields.");
      return;
    }

    const templateParams = {
      name: demoName,
      mobile: demoMobile,
    };

    emailjs
      .send(
        "service_n24ams8", // Replace with your EmailJS service ID
        "template_qawgtrl", // Replace with your EmailJS template ID
        templateParams,
        "KX5RAxDWZ5jh2Iomo" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormSubmitted(true);
          setShowDemoForm(false);
          setDemoName("");
          setDemoMobile("");
          alert("Form submitted successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-phone sm:bg-back  bg-no-repeat bg bg-cover">
      <div className="bg-white/50 backdrop-blur-md p-6 rounded-lg shadow-lg sm:w-96 w-[300px] sm:translate-y-0  flex flex-col -translate-y-56">
        <h2 className="text-center text-xl font-bold mb-4">
          Login <i className="fas fa-hand-point-down"></i>
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                className="form-input w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Enter your username"
              />
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="form-input w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Enter your password"
              />
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400">
                <i className="fas fa-key"></i>
              </span>
            </div>
          </div>
        </form>

        <a
          href="https://wa.me/919289668316?text=Hi,%0Aplease%20give%20my%20account"
          type="button"
          className="w-full p-1 bg-black text-white text-center py-2 font-medium capitalize"
        >
          Login with Demo ID
        </a>
      </div>

      {showDemoForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-center text-xl font-bold mb-4">
              Demo Account Form
            </h2>
            <form onSubmit={handleDemoFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={demoName}
                  onChange={(e) => setDemoName(e.target.value)}
                  className="form-input w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="text"
                  value={demoMobile}
                  onChange={(e) => setDemoMobile(e.target.value)}
                  className="form-input w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="Enter your mobile number"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded shadow hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </form>
            <button
              onClick={() => setShowDemoForm(false)}
              className="w-full bg-red-600 text-white py-2 mt-4 rounded shadow hover:bg-red-700 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
