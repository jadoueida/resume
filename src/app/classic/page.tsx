import { ResumeData } from '../types';
import resumeData from '../resume.json';
import { ClassicHeader } from './components/ClassicHeader';
import { ClassicExperience } from './components/ClassicExperience';
import { ClassicEducation } from './components/ClassicEducation';
import { ClassicSkills } from './components/ClassicSkills';
import { ClassicCertificates } from './components/ClassicCertificates';
import { ClassicLanguages } from './components/ClassicLanguages';
import { PrintButton } from '../components/PrintButton';

export default function ClassicResume() {
    const data: ResumeData = resumeData;

    return (
        <main className="min-h-screen bg-white py-4 print:py-0">
            <div className="container mx-auto px-4 max-w-[850px]">
                <ClassicHeader basics={data.basics} />
                <hr className="my-3 border-gray-300" />
                <div className="grid grid-cols-1 gap-4">
                    <ClassicExperience work={data.work} />
                    <hr className="my-2 border-gray-300" />
                    <ClassicEducation education={data.education} />
                    <hr className="my-2 border-gray-300" />
                    <ClassicCertificates certificates={data.certificates} />
                    <hr className="my-2 border-gray-300" />
                    <ClassicSkills skills={data.skills} />
                    <hr className="my-2 border-gray-300" />
                    <ClassicLanguages languages={data.languages} />
                </div>
                <PrintButton variant="classic" />
            </div>
        </main>
    );
} 