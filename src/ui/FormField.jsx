// src/FormField.js
import React from 'react';

const FormField = ({ label,name, type = 'text', placeholder, value, onChange, required = false }) => {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        required={required}
        className="block w-full py-1 px-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:capitalize"
      />
    </div>
  );
};

export default FormField;