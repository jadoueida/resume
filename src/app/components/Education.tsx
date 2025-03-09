import { ResumeData } from '../types';

interface EducationProps {
    education: ResumeData['education'];
}

export function Education({ education }: EducationProps) {
    return (
        <section className="mb-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Education</h2>
            <div className="space-y-4">
                {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-gray-800 pl-4">
                        <h3 className="text-xl text-black font-semibold">{edu.institution}</h3>
                        <div className="text-gray-600">
                            {edu.studyType}
                            {edu.area && ` in ${edu.area}`} • {edu.location}
                        </div>
                        <div className="text-sm text-gray-500 mb-2">
                            {edu.startDate} - {edu.endDate}
                        </div>
                        {edu.courses && (
                            <div className="mt-2">
                                <span className="text-sm font-medium text-gray-700">Key Courses:</span>
                                <ul className="list-disc list-inside space-y-1">
                                    {edu.courses.map((course, idx) => (
                                        <li key={idx} className="text-gray-700 text-sm">{course}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
} 