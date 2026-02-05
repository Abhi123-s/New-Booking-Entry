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
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">New Booking Entry</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <SenderDetails register={register} errors={errors} />
                        <ReceiverDetails register={register} errors={errors} />
                    </div>
                    <PackageDetails register={register} errors={errors} watch={watch} />

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={!isValid}
                            className={`px-6 py-2 rounded-md font-medium text-white transition-colors ${isValid
                                ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                                : 'bg-gray-400 cursor-not-allowed'
                                }`}
                        >
                            Submit Booking
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
