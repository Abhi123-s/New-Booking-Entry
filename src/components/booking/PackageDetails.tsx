import { type UseFormRegister, type FieldErrors, type UseFormWatch } from 'react-hook-form';
import { type BookingFormValues } from '../../types/booking';
import SectionWrapper from '../form/SectionWrapper';
import FormInput from '../form/FormInput';

interface PackageDetailsProps {
    register: UseFormRegister<BookingFormValues>;
    errors: FieldErrors<BookingFormValues>;
    watch: UseFormWatch<BookingFormValues>;
}

export default function PackageDetails({ register, errors, watch }: PackageDetailsProps) {
    const weight = watch('weight') || 0;
    const ratePerKg = watch('ratePerKg') || 0;
    const totalCost = weight * ratePerKg;

    return (
        <SectionWrapper title="Package Details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                    label="Weight (kg)"
                    name="weight"
                    type="number"
                    register={register}
                    error={errors.weight}
                    required
                    validation={{
                        required: 'Weight is required',
                        min: { value: 0.1, message: 'Weight must be greater than 0' },
                        valueAsNumber: true,
                    }}
                />
                <FormInput
                    label="Rate per kg (INR)"
                    name="ratePerKg"
                    type="number"
                    register={register}
                    error={errors.ratePerKg}
                    required
                    validation={{
                        required: 'Rate per kg is required',
                        min: { value: 0.1, message: 'Rate must be greater than 0' },
                        valueAsNumber: true,
                    }}
                />
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">
                    Total Shipping Cost (INR)
                </label>
                <input
                    type="text"
                    value={`₹${totalCost.toFixed(2)}`}
                    readOnly
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-gray-50 cursor-not-allowed"
                />
            </div>
        </SectionWrapper>
    );
}
