import { ResumeData } from '../../types';
import { formatDate } from '../../utils/dateFormatter';

interface ClassicCertificatesProps {
    certificates: ResumeData['certificates'];
}

export function ClassicCertificates({ certificates }: ClassicCertificatesProps) {
    return (
        <section>
            <h2 className="text-xl font-serif font-bold mb-3 uppercase tracking-wide text-black">Certifications</h2>
            <div className="space-y-3">
                {certificates?.map((cert, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="text-base font-semibold text-black">{cert.name}</h3>
                            <span className="text-sm text-black">{formatDate(cert.date)}</span>
                        </div>
                        <div className="text-sm mb-1 text-black">
                            {cert.issuer} | {cert.location}
                        </div>
                        <p className="text-sm text-black">{cert.summary}</p>
                    </div>
                ))}
            </div>
        </section>
    );
} 