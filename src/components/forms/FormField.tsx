import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string | string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  min?: string | number;
  max?: string | number;
  as?: 'input' | 'select' | 'textarea';
  children?: React.ReactNode;
  placeholder?: string;
  multiple?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  min,
  max,
  as = 'input',
  children,
  placeholder,
  multiple = false
}) => {
  const baseClassName = "w-full p-2 border rounded focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-900 bg-white placeholder:text-gray-400 text-sm";
  
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {as === 'textarea' ? (
        <textarea
          name={name}
          value={value as string}
          onChange={onChange}
          className={baseClassName}
          required={required}
          rows={3}
          placeholder={placeholder}
        />
      ) : as === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={baseClassName}
          required={required}
          multiple={multiple}
        >
          {children}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value as string}
          onChange={onChange}
          className={baseClassName}
          required={required}
          min={min}
          max={max}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default FormField;