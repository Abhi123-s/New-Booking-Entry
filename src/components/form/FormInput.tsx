import { type UseFormRegister, type FieldError, type RegisterOptions } from 'react-hook-form';
import { type BookingFormValues } from '../../types/booking';

interface FormInputProps {
    label: string;
    name: keyof BookingFormValues;
    type?: string;
    register: UseFormRegister<BookingFormValues>;
    error?: FieldError;
    required?: boolean;
    validation?: RegisterOptions<BookingFormValues>;
}

export default function FormInput({
    label,
    name,
    type = 'text',
    register,
    error,
    required = false,
    validation,
}: FormInputProps) {
    return (
        <div className="flex flex-col group">
            <label htmlFor={name} className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                {label}
                {required && <span className="text-red-500 text-base">*</span>}
            </label>
            <input
                id={name}
                type={type}
                {...register(name, validation)}
                className={`
                    px-4 py-3 border-2 rounded-xl text-base font-medium
                    bg-white/80 backdrop-blur-sm
                    transition-all duration-200 ease-in-out
                    focus:outline-none focus:ring-4 focus:ring-purple-300/50 focus:border-purple-500 focus:scale-[1.01]
                    hover:border-purple-300
                    ${error
                        ? 'border-red-400 bg-red-50/50 focus:ring-red-300/50 focus:border-red-500'
                        : 'border-gray-300'
                    }
                `}
                placeholder={`Enter ${label.toLowerCase()}`}
            />
            {error && (
                <span className="text-sm text-red-600 mt-2 flex items-center gap-1 font-medium animate-pulse">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {error.message}
                </span>
            )}
        </div>
    );
}
