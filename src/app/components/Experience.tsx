import { ResumeData } from '../types';
import { formatDate } from '../utils/dateFormatter';

interface ExperienceProps {
    work: ResumeData['work'];
}

export function Experience({ work }: ExperienceProps) {
    // Sort work experience by start date in descending order
    const sortedWork = [...work].sort((a, b) => {
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);
        return dateB.getTime() - dateA.getTime();
    });

    return (
        <section className="mb-6">
            <h2 className="text-2xl font-bold mb-4 text-black">Work Experience</h2>
            <div className="space-y-4">
                {sortedWork.map((job, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="text-lg font-semibold text-black">{job.position}</h3>
                            <span className="text-sm text-black">
                                {formatDate(job.startDate)} - {formatDate(job.endDate)}
                            </span>
                        </div>
                        <div className="text-sm mb-2 text-black">
                            <span className="font-medium">{job.name}</span> • {job.location}
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