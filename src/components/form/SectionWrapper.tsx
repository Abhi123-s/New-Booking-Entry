import { type ReactNode } from 'react';

interface SectionWrapperProps {
    title: string;
    children: ReactNode;
}

export default function SectionWrapper({ title, children }: SectionWrapperProps) {
    return (
        <div className="border border-gray-300 rounded-lg p-6 bg-white">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                {title}
            </h2>
            <div className="space-y-4">
                {children}
            </div>
        </div>
    );
}
