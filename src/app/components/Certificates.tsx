import { ResumeData } from '../types';

interface CertificatesProps {
    certificates: ResumeData['certificates'];
}

export function Certificates({ certificates }: CertificatesProps) {
    return (
        <section className="mb-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Certifications</h2>
            <div className="space-y-4">
                {certificates?.map((cert, index) => (
                    <div key={index} className="border-l-4 border-gray-800 pl-4">
                        <h3 className="text-xl text-black font-semibold">{cert.name}</h3>
                        <div className="text-gray-600">
                            {cert.issuer} • {cert.location}
                        </div>
                        <div className="text-sm text-gray-500 mb-2">{cert.date}</div>
                        <p className="text-gray-700">{cert.summary}</p>
                    </div>
                ))}
            </div>
        </section>
    );
} 