import { type UseFormRegister, type FieldError, type RegisterOptions } from 'react-hook-form';
import { type BookingFormValues } from '../../types/booking';

interface FormTextAreaProps {
    label: string;
    name: keyof BookingFormValues;
    register: UseFormRegister<BookingFormValues>;
    error?: FieldError;
    required?: boolean;
    rows?: number;
    validation?: RegisterOptions<BookingFormValues>;
}

export default function FormTextArea({
    label,
    name,
    register,
    error,
    required = false,
    rows = 3,
    validation,
}: FormTextAreaProps) {
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <textarea
                id={name}
                rows={rows}
                {...register(name, validation)}
                className={`px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${error ? 'border-red-500' : 'border-gray-300'
                    }`}
            />
            {error && (
                <span className="text-xs text-red-500 mt-1">{error.message}</span>
            )}
        </div>
    );
}
