import { type UseFormRegister, type FieldErrors } from 'react-hook-form';
import { type BookingFormValues } from '../../types/booking';
import SectionWrapper from '../form/SectionWrapper';
import FormInput from '../form/FormInput';
import FormTextArea from '../form/FormTextArea';

interface ReceiverDetailsProps {
    register: UseFormRegister<BookingFormValues>;
    errors: FieldErrors<BookingFormValues>;
}

export default function ReceiverDetails({ register, errors }: ReceiverDetailsProps) {
    return (
        <SectionWrapper title="Receiver Details">
            <FormInput
                label="Full Name"
                name="receiverName"
                register={register}
                error={errors.receiverName}
                required
                validation={{
                    required: 'Receiver name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' },
                }}
            />
            <FormTextArea
                label="Full Address"
                name="receiverAddress"
                register={register}
                error={errors.receiverAddress}
                required
                rows={4}
                validation={{
                    required: 'Address is required',
                    minLength: { value: 10, message: 'Address must be at least 10 characters' },
                }}
            />
        </SectionWrapper>
    );
}
