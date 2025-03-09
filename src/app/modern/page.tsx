import { ResumeData } from '../types';
import resumeData from '../resume.json';
import { Header } from '../components/Header';
import { Education } from '../components/Education';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';
import { Certificates } from '../components/Certificates';
import { Languages } from '../components/Languages';
import { PrintButton } from '../components/PrintButton';

export default function ModernResume() {
    const data: ResumeData = resumeData;

    return (
        <main className="min-h-screen bg-gray-50 py-4">
            <div className="container mx-auto px-4 max-w-4xl bg-white shadow-lg rounded-lg">
                <Header basics={data.basics} />
                <div className="grid md:grid-cols-3 gap-4 p-4">
                    <div className="md:col-span-2">
                        <Experience work={data.work} />
                        <Education education={data.education} />
                        <Certificates certificates={data.certificates} />
                    </div>
                    <div className="space-y-4">
                        <Skills skills={data.skills} />
                        <Languages languages={data.languages} />
                    </div>
                </div>
                <PrintButton variant="modern" />
            </div>
        </main>
    );
} 