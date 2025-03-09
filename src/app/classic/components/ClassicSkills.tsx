import { ResumeData } from '../../types';

interface ClassicSkillsProps {
    skills: ResumeData['skills'];
}

export function ClassicSkills({ skills }: ClassicSkillsProps) {
    return (
        <section>
            <h2 className="text-xl font-serif font-bold mb-3 uppercase tracking-wide text-black">Skills</h2>
            <div className="space-y-2">
                {skills.map((skillGroup, index) => (
                    <div key={index} className="text-sm text-black">
                        <span className="font-medium">{skillGroup.name}:</span>{' '}
                        {skillGroup.keywords.join(', ')}
                    </div>
                ))}
            </div>
        </section>
    );
} 