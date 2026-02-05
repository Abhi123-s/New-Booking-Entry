import { useForm } from 'react-hook-form';
import { type BookingFormValues } from '../types/booking';
import SenderDetails from '../components/booking/SenderDetails';
import ReceiverDetails from '../components/booking/ReceiverDetails';
import PackageDetails from '../components/booking/PackageDetails';

export default function NewBookingPage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm<BookingFormValues>({
        mode: 'onChange',
        defaultValues: {
            senderName: '',
            senderMobile: '',
            senderEmail: '',
            receiverName: '',
            receiverAddress: '',
            weight: 0,
            ratePerKg: 0,
        },
    });

    const onSubmit = (data: BookingFormValues) => {
        console.log('Booking Form Data:', data);
        alert('Booking Successful!');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-bold text-gray-800 mb-3 tracking-tight drop-shadow-sm">
                        New Booking Entry
                    </h1>
                    <p className="text-gray-600 text-lg font-light">
                        Fill in the details below to create a new shipment booking
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Sender & Receiver Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <SenderDetails register={register} errors={errors} />
                        <ReceiverDetails register={register} errors={errors} />
                    </div>

                    {/* Package Details */}
                    <PackageDetails register={register} errors={errors} watch={watch} />

                    {/* Submit Button */}
                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            disabled={!isValid}
                            className={`
                                group relative px-8 py-4 rounded-xl font-semibold text-white text-lg
                                transition-all duration-300 ease-out
                                ${isValid
                                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg hover:shadow-2xl hover:scale-105 cursor-pointer'
                                    : 'bg-gray-400 cursor-not-allowed opacity-60'
                                }
                            `}
                        >
                            <span className="flex items-center gap-2">
                                <svg
                                    className={`w-6 h-6 ${isValid ? 'group-hover:rotate-12 transition-transform duration-300' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Submit Booking
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
