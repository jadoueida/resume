import { ResumeData } from '../types';

interface LanguagesProps {
    languages: ResumeData['languages'];
}

export function Languages({ languages }: LanguagesProps) {
    return (
        <section className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Languages</h2>
            <div className="space-y-2">
                {languages.map((lang, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center text-gray-700"
                    >
                        <span className="font-medium">{lang.language}</span>
                        <span className="text-sm bg-gray-200 px-2 py-1 rounded-full">
                            {lang.fluency}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
} 