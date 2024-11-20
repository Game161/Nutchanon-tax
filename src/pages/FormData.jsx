import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          แบบฟอร์มภาษีเงินได้
        </h1>
        <form onSubmit={submitForm}>
          <div className="mb-4">
            <label
              htmlFor="salary"
              className="block text-sm font-medium text-gray-700"
            >
              เงินเดือน
            </label>
            <input
              type="text"
              name="salary"
              id="salary"
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="bonus"
              className="block text-sm font-medium text-gray-700"
            >
              โบนัส
            </label>
            <input
              type="text"
              name="bonus"
              id="bonus"
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="social"
              className="block text-sm font-medium text-gray-700"
            >
              ค่าประกันสังคม
            </label>
            <input
              type="text"
              name="social"
              id="social"
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="child"
              className="block text-sm font-medium text-gray-700"
            >
              จำนวนบุตร
            </label>
            <input
              type="text"
              name="child"
              id="child"
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="life"
              className="block text-sm font-medium text-gray-700"
            >
              ค่าเบี้ยประกันชีวิต
            </label>
            <input
              type="text"
              name="life"
              id="life"
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md shadow-sm "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormData;
