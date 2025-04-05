export interface ResumeData {
    basics: {
        name: string;
        location: {
            address: string;
        };
        phone: string;
        email: string;
        profiles: {
            network: string;
            url: string;
        }[];
    };
    education: {
        institution: string;
        location: string;
        area?: string;
        studyType: string;
        startDate: string;
        endDate: string;
        courses?: string[];
        minors?: string[];
    }[];
    work: {
        name: string;
        position: string;
        location: string;
        startDate: string;
        endDate: string;
        highlights: string[];
    }[];
    certificates?: {
        name: string;
        date: string;
        issuer: string;
        location: string;
        summary: string;
    }[];
    volunteer?: {
        organization: string;
        location: string;
        position: string;
        startDate: string;
        endDate: string;
        highlights: string[];
    }[];
    skills: {
        name: string;
        keywords: string[];
    }[];
    languages: {
        language: string;
        fluency: string;
    }[];
} 