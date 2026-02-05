import { type UseFormRegister, type FieldErrors } from 'react-hook-form';
import { type BookingFormValues } from '../../types/booking';
import SectionWrapper from '../form/SectionWrapper';
import FormInput from '../form/FormInput';

interface SenderDetailsProps {
    register: UseFormRegister<BookingFormValues>;
    errors: FieldErrors<BookingFormValues>;
}

export default function SenderDetails({ register, errors }: SenderDetailsProps) {
    return (
        <SectionWrapper title="Sender Details">
            <FormInput
                label="Full Name"
                name="senderName"
                register={register}
                error={errors.senderName}
                required
                validation={{
                    required: 'Full Name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' },
                }}
            />
            <FormInput
                label="Mobile Number"
                name="senderMobile"
                type="tel"
                register={register}
                error={errors.senderMobile}
                required
                validation={{
                    required: 'Mobile Number is required',
                    pattern: {
                        value: /^\d{10}$/,
                        message: 'Mobile Number must be exactly 10 digits',
                    },
                }}
            />
            <FormInput
                label="Email"
                name="senderEmail"
                type="email"
                register={register}
                error={errors.senderEmail}
                validation={{
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email format',
                    },
                }}
            />
        </SectionWrapper>
    );
}

