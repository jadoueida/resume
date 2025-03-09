import { ResumeData } from '../../types';
import { formatDate } from '../../utils/dateFormatter';

interface ClassicEducationProps {
    education: ResumeData['education'];
}

export function ClassicEducation({ education }: ClassicEducationProps) {
    return (
        <section>
            <h2 className="text-xl font-serif font-bold mb-3 uppercase tracking-wide text-black">Education</h2>
            <div className="space-y-4">
                {education.map((edu, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="text-lg font-semibold text-black">{edu.institution}</h3>
                            <span className="text-sm text-black">
                                {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                            </span>
                        </div>
                        <div className="text-sm mb-1 text-black">
                            {edu.studyType}
                            {edu.area && ` in ${edu.area}`} | {edu.location}
                        </div>
                        {edu.courses && (
                            <div className="text-sm text-black">
                                <span className="font-medium">Relevant Coursework:</span>{' '}
                                {edu.courses.join(', ')}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
} 