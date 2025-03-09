import { ResumeData } from '../../types';

interface ClassicLanguagesProps {
    languages: ResumeData['languages'];
}

export function ClassicLanguages({ languages }: ClassicLanguagesProps) {
    return (
        <section>
            <h2 className="text-xl font-serif font-bold mb-3 uppercase tracking-wide text-black">Languages</h2>
            <div className="text-sm text-black">
                {languages.map((lang, index) => (
                    <span key={index}>
                        {lang.language} ({lang.fluency})
                        {index < languages.length - 1 ? ', ' : ''}
                    </span>
                ))}
            </div>
        </section>
    );
} 