export interface BookingFormValues {
    senderName: string;
    senderMobile: string;
    senderEmail?: string;

    receiverName: string;
    receiverAddress: string;

    weight: number;
    ratePerKg: number;
}
