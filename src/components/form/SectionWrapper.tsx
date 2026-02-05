import { type ReactNode } from 'react';

interface SectionWrapperProps {
    title: string;
    children: ReactNode;
}

export default function SectionWrapper({ title, children }: SectionWrapperProps) {
    return (
        <div className="glass-effect rounded-2xl p-8 shadow-xl hover-lift">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-purple-200/30">
                <div className="w-1.5 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
                    {title}
                </h2>
            </div>
            <div className="space-y-5">
                {children}
            </div>
        </div>
    );
}
