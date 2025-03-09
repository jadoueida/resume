import { ResumeData } from '../types';

interface SkillsProps {
    skills: ResumeData['skills'];
}

export function Skills({ skills }: SkillsProps) {
    return (
        <section className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Skills</h2>
            <div className="space-y-4">
                {skills.map((skillGroup, index) => (
                    <div key={index}>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">
                            {skillGroup.name}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.keywords.map((keyword, idx) => (
                                <span
                                    key={idx}
                                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
                                >
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 