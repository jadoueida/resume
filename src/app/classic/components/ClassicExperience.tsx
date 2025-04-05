import { ResumeData } from '../../types';
import { formatDate } from '../../utils/dateFormatter';

interface ClassicExperienceProps {
    work: ResumeData['work'];
}

export function ClassicExperience({ work }: ClassicExperienceProps) {
    return (
        <section>
            <h2 className="text-xl font-serif font-bold mb-3 uppercase tracking-wide text-black">Professional Experience</h2>
            <div className="space-y-4">
                {work.map((job, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="text-lg font-semibold text-black">{job.position}</h3>
                            <span className="text-sm text-black">
                                {formatDate(job.startDate)} - {formatDate(job.endDate)}
                            </span>
                        </div>
                        <div className="text-sm mb-2 text-black">
                            <span className="font-medium">{job.name}</span> | {job.location}
                        </div>
                        {job.highlights && job.highlights.length > 0 && (
                            <ul className="list-disc ml-4 text-sm space-y-1">
                                {job.highlights.map((highlight, idx) => (
                                    <li key={idx} className="text-black">{highlight}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
} 