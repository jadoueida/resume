import { ResumeData } from '../types';

interface HeaderProps {
    basics: ResumeData['basics'];
}

export function Header({ basics }: HeaderProps) {
    return (
        <header className="bg-gray-800 text-white p-6 rounded-t-lg">
            <h1 className="text-3xl font-bold mb-2">{basics.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p className="text-gray-300">{basics.location.address}</p>
                    <p className="text-gray-300">{basics.phone}</p>
                </div>
                <div className="flex flex-col md:items-end">
                    {basics.profiles.map((profile) => (
                        <a
                            key={profile.network}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 hover:text-blue-200 transition-colors"
                        >
                            {profile.network}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
} 