import { ResumeData } from '../../types';

interface ClassicHeaderProps {
    basics: ResumeData['basics'];
}

export function ClassicHeader({ basics }: ClassicHeaderProps) {
    return (
        <header className="text-center mb-6">
            <h1 className="text-3xl font-serif mb-2 text-black">{basics.name}</h1>
            <div className="text-sm space-y-1 text-black">
                <p>{basics.location.address}</p>
                <p>{basics.phone}</p>
                {basics.profiles.map((profile) => (
                    <a
                        key={profile.network}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-blue-700 underline"
                    >
                        {profile.network}
                    </a>
                ))}
            </div>
        </header>
    );
} 