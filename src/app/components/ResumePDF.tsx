import { Document, Page, Text, View, StyleSheet, Font, pdf } from '@react-pdf/renderer';
import { ResumeData } from '../types';

// Register fonts
Font.register({
    family: 'Helvetica',
    fonts: [
        { src: 'Helvetica' },
        { src: 'Helvetica-Bold', fontWeight: 'bold' }
    ]
});

// Modern template styles
const modernStyles = StyleSheet.create({
    page: {
        backgroundColor: '#FFFFFF',
        padding: 30,
        fontFamily: 'Helvetica',
        flexDirection: 'row',
    },
    mainContent: {
        width: '65%',
        paddingRight: 15,
    },
    sidebar: {
        width: '35%',
        paddingLeft: 15,
    },
    header: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e5',
        borderBottomStyle: 'solid',
        paddingBottom: 8,
        width: '100%',
        position: 'absolute',
        top: 30,
        left: 30,
    },
    name: {
        fontSize: 22,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 4,
        color: '#2d3748',
    },
    contact: {
        fontSize: 9,
        marginBottom: 2,
        color: '#4a5568',
    },
    sectionTitle: {
        fontSize: 13,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 6,
        marginTop: 10,
        color: '#2d3748',
        textTransform: 'uppercase',
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e5',
        borderBottomStyle: 'solid',
        paddingBottom: 3,
    },
    jobTitle: {
        fontSize: 11,
        fontFamily: 'Helvetica-Bold',
        color: '#2d3748',
    },
    jobDetails: {
        fontSize: 9,
        marginBottom: 2,
        color: '#4a5568',
    },
    bulletPoint: {
        fontSize: 9,
        marginBottom: 2,
        paddingLeft: 8,
        color: '#4a5568',
    },
    skillCategory: {
        fontSize: 10,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 2,
        color: '#2d3748',
    },
    skill: {
        fontSize: 9,
        marginBottom: 2,
        color: '#4a5568',
    },
});

// Classic template styles
const classicStyles = StyleSheet.create({
    page: {
        backgroundColor: '#FFFFFF',
        padding: 30,
        fontFamily: 'Helvetica',
    },
    header: {
        marginBottom: 15,
        textAlign: 'center',
    },
    name: {
        fontSize: 20,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 3,
    },
    contact: {
        fontSize: 8,
        marginBottom: 1,
    },
    section: {
        marginBottom: 8,
    },
    sectionTitle: {
        fontSize: 12,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        borderBottomStyle: 'solid',
        paddingBottom: 2,
    },
    jobTitle: {
        fontSize: 10,
        fontFamily: 'Helvetica-Bold',
    },
    jobDetails: {
        fontSize: 8,
        marginBottom: 2,
    },
    bulletPoint: {
        fontSize: 8,
        marginBottom: 1,
        paddingLeft: 8,
    },
    skillCategory: {
        fontSize: 9,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 1,
    },
    skill: {
        fontSize: 8,
        marginBottom: 1,
        paddingLeft: 8,
    },
    twoColumnGrid: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 8,
    },
    column: {
        flex: 1,
    },
    skillsSection: {
        marginBottom: 6,
    },
    skillGroup: {
        marginBottom: 4,
    },
    skillsRow: {
        flexDirection: 'row',
        gap: 15,
        marginBottom: 4,
    },
    skillsColumn: {
        flex: 1,
    },
    certificateSection: {
        marginBottom: 8,
    },
    certificateTitle: {
        fontSize: 9,
        fontFamily: 'Helvetica-Bold',
    },
    certificateDetails: {
        fontSize: 8,
        marginBottom: 1,
    }
});

interface ResumePDFProps {
    data: ResumeData;
    variant: 'modern' | 'classic';
}

function ModernTemplate({ data }: { data: ResumeData }) {
    // Sort work experience by start date in descending order
    const sortedWork = [...data.work].sort((a, b) => {
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);
        return dateB.getTime() - dateA.getTime();
    });

    return (
        <Page size="LETTER" style={modernStyles.page}>
            <View style={modernStyles.header}>
                <Text style={modernStyles.name}>{data.basics.name}</Text>
                <Text style={modernStyles.contact}>
                    {data.basics.phone} | {data.basics.location.address}
                </Text>
                {data.basics.profiles.map((profile, index) => (
                    <Text key={index} style={modernStyles.contact}>
                        {profile.network}: {profile.url}
                    </Text>
                ))}
            </View>

            <View style={modernStyles.mainContent}>
                <View style={{ marginTop: 80 }}>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={modernStyles.sectionTitle}>Experience</Text>
                        {sortedWork.map((job, index) => (
                            <View key={index} style={{ marginBottom: 10 }}>
                                <Text style={modernStyles.jobTitle}>{job.position}</Text>
                                <Text style={modernStyles.jobDetails}>
                                    {job.name} | {job.location} | {formatDate(job.startDate)} - {formatDate(job.endDate)}
                                </Text>
                                {job.highlights && job.highlights.length > 0 && job.highlights.map((highlight, idx) => (
                                    <Text key={idx} style={modernStyles.bulletPoint}>• {highlight}</Text>
                                ))}
                            </View>
                        ))}
                    </View>

                    <View style={{ marginBottom: 15 }}>
                        <Text style={modernStyles.sectionTitle}>Education</Text>
                        {data.education.map((edu, index) => (
                            <View key={index} style={{ marginBottom: 8 }}>
                                <Text style={modernStyles.jobTitle}>{edu.institution}</Text>
                                <Text style={modernStyles.jobDetails}>
                                    {edu.studyType}
                                    {edu.area ? ` in ${edu.area}` : ''} | {edu.location} | {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                                </Text>
                                {edu.minors && (
                                    <Text style={modernStyles.bulletPoint}>
                                        Minors: {edu.minors.join(', ')}
                                    </Text>
                                )}
                            </View>
                        ))}
                    </View>

                    {data.certificates && (
                        <View style={{ marginBottom: 15 }}>
                            <Text style={modernStyles.sectionTitle}>Certificates</Text>
                            {data.certificates.map((cert, index) => (
                                <View key={index} style={{ marginBottom: 5 }}>
                                    <Text style={modernStyles.jobTitle}>{cert.name}</Text>
                                    <Text style={modernStyles.jobDetails}>
                                        {cert.issuer} | {formatDate(cert.date)}
                                    </Text>
                                    <Text style={modernStyles.bulletPoint}>{cert.summary}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            </View>

            <View style={modernStyles.sidebar}>
                <View style={{ marginTop: 80 }}>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={modernStyles.sectionTitle}>Skills</Text>
                        {data.skills.map((skillGroup, index) => (
                            <View key={index} style={{ marginBottom: 10 }}>
                                <Text style={modernStyles.skillCategory}>{skillGroup.name}</Text>
                                {skillGroup.keywords.map((skill, idx) => (
                                    <Text key={idx} style={modernStyles.skill}>• {skill}</Text>
                                ))}
                            </View>
                        ))}
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={modernStyles.sectionTitle}>Languages</Text>
                        {data.languages.map((lang, index) => (
                            <Text key={index} style={modernStyles.skill}>
                                • {lang.language} ({lang.fluency})
                            </Text>
                        ))}
                    </View>
                </View>
            </View>
        </Page>
    );
}

function ClassicTemplate({ data }: { data: ResumeData }) {
    // Sort work experience by start date in descending order
    const sortedWork = [...data.work].sort((a, b) => {
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);
        return dateB.getTime() - dateA.getTime();
    });

    return (
        <Page size="LETTER" style={classicStyles.page}>
            <View style={classicStyles.header}>
                <Text style={classicStyles.name}>{data.basics.name}</Text>
                <Text style={classicStyles.contact}>
                    {data.basics.phone} | {data.basics.location.address}
                </Text>
                {data.basics.profiles.map((profile, index) => (
                    <Text key={index} style={classicStyles.contact}>
                        {profile.network}: {profile.url}
                    </Text>
                ))}
            </View>

            <View style={classicStyles.section}>
                <Text style={classicStyles.sectionTitle}>Experience</Text>
                {sortedWork.map((job, index) => (
                    <View key={index} style={{ marginBottom: 4 }}>
                        <Text style={classicStyles.jobTitle}>{job.position}</Text>
                        <Text style={classicStyles.jobDetails}>
                            {job.name} | {job.location} | {formatDate(job.startDate)} - {formatDate(job.endDate)}
                        </Text>
                        {job.highlights && job.highlights.length > 0 && job.highlights.map((highlight, idx) => (
                            <Text key={idx} style={classicStyles.bulletPoint}>• {highlight}</Text>
                        ))}
                    </View>
                ))}
            </View>

            <View style={classicStyles.section}>
                <Text style={classicStyles.sectionTitle}>Education</Text>
                {data.education.map((edu, index) => (
                    <View key={index} style={{ marginBottom: 6 }}>
                        <Text style={classicStyles.jobTitle}>{edu.institution}</Text>
                        <Text style={classicStyles.jobDetails}>
                            {edu.studyType}
                            {edu.area ? ` in ${edu.area}` : ''} | {edu.location} | {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                        </Text>
                        {edu.minors && (
                            <Text style={classicStyles.bulletPoint}>
                                Minors: {edu.minors.join(', ')}
                            </Text>
                        )}
                    </View>
                ))}
            </View>

            {data.certificates && (
                <View style={classicStyles.section}>
                    <Text style={classicStyles.sectionTitle}>Certificates</Text>
                    {data.certificates.map((cert, index) => (
                        <View key={index} style={{ marginBottom: 2 }}>
                            <Text style={classicStyles.certificateTitle}>{cert.name}</Text>
                            <Text style={classicStyles.certificateDetails}>
                                {cert.issuer} | {formatDate(cert.date)}
                            </Text>
                        </View>
                    ))}
                </View>
            )}

            <View style={classicStyles.section}>
                <Text style={classicStyles.sectionTitle}>Skills</Text>
                <View style={classicStyles.skillsRow}>
                    {/* First column of skills */}
                    <View style={classicStyles.skillsColumn}>
                        {data.skills.slice(0, Math.ceil(data.skills.length / 2)).map((skillGroup, index) => (
                            <View key={index} style={classicStyles.skillGroup}>
                                <Text style={classicStyles.skillCategory}>{skillGroup.name}</Text>
                                {skillGroup.keywords.map((skill, idx) => (
                                    <Text key={idx} style={classicStyles.skill}>• {skill}</Text>
                                ))}
                            </View>
                        ))}
                    </View>
                    {/* Second column of skills */}
                    <View style={classicStyles.skillsColumn}>
                        {data.skills.slice(Math.ceil(data.skills.length / 2)).map((skillGroup, index) => (
                            <View key={index} style={classicStyles.skillGroup}>
                                <Text style={classicStyles.skillCategory}>{skillGroup.name}</Text>
                                {skillGroup.keywords.map((skill, idx) => (
                                    <Text key={idx} style={classicStyles.skill}>• {skill}</Text>
                                ))}
                            </View>
                        ))}
                    </View>
                </View>
            </View>

            <View style={classicStyles.section}>
                <Text style={classicStyles.sectionTitle}>Languages</Text>
                <View style={classicStyles.skillsRow}>
                    {data.languages.map((lang, index) => (
                        <Text key={index} style={classicStyles.skill}>
                            • {lang.language} ({lang.fluency})
                        </Text>
                    ))}
                </View>
            </View>
        </Page>
    );
}

export function ResumeDocument({ data, variant }: ResumePDFProps) {
    try {
        return (
            <Document>
                {variant === 'modern' ? (
                    <ModernTemplate data={data} />
                ) : (
                    <ClassicTemplate data={data} />
                )}
            </Document>
        );
    } catch (error) {
        console.error('Error rendering PDF:', error);
        throw error;
    }
}

function formatDate(dateString: string): string {
    if (dateString === 'Present') return 'Present';
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    } catch {
        return dateString;
    }
}

export async function generatePDF(data: ResumeData, variant: 'modern' | 'classic') {
    try {
        console.log('Generating PDF with data:', data);
        const blob = await pdf(<ResumeDocument data={data} variant={variant} />).toBlob();
        console.log('PDF generated successfully');
        return blob;
    } catch (error) {
        console.error('Error in generatePDF:', error);
        throw error;
    }
} 