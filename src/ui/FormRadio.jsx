// src/RadioButton.js
import React from 'react';

const FormRadio = ({ name,label,required, options, selectedValue, onChange }) => {
  return (
    <div>
        {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {options.map((option) => (
        <div key={option.value} className="flex items-center mb-2">
          <input
            type="radio"
            id={option.value}
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onChange}
            className="h-4 w-4 text-sky-600 border-gray-300 focus:ring-sky-500"
          />
          <label htmlFor={option.value} className="ml-2 text-sm font-medium text-gray-700">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FormRadio;