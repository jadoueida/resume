'use client';

import { useState } from 'react';
import resumeData from '../resume.json';
import { generatePDF } from './ResumePDF';

interface PrintButtonProps {
    variant: 'modern' | 'classic';
}

export function PrintButton({ variant }: PrintButtonProps) {
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleDownload = async () => {
        try {
            setIsGenerating(true);
            setError(null);
            console.log(`Starting ${variant} PDF generation...`);
            const blob = await generatePDF(resumeData, variant);
            console.log('PDF blob generated:', blob);

            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${resumeData.basics.name.replace(/\s+/g, '-')}-${variant}-Resume.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error generating PDF:', error);
            setError('Failed to generate PDF. Please try again.');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 flex flex-col items-end">
            {error && (
                <div className="mb-2 bg-red-100 text-red-700 px-4 py-2 rounded text-sm">
                    {error}
                </div>
            )}
            <button
                onClick={handleDownload}
                disabled={isGenerating}
                className={`${variant === 'modern' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-black hover:bg-gray-800'
                    } text-white px-4 py-2 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
            >
                {isGenerating ? 'Generating PDF...' : 'Download PDF'}
            </button>
        </div>
    );
} 