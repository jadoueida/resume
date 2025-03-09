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
    },
    mainContent: {
        width: '68%',
    },
    sidebar: {
        width: '28%',
        position: 'absolute',
        right: 30,
        top: 120,
    },
    header: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e5',
        borderBottomStyle: 'solid',
        paddingBottom: 10,
    },
    name: {
        fontSize: 24,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 5,
        color: '#2d3748',
    },
    contact: {
        fontSize: 10,
        marginBottom: 3,
        color: '#4a5568',
    },
    sectionTitle: {
        fontSize: 14,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 8,
        marginTop: 12,
        color: '#2d3748',
        textTransform: 'uppercase',
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e5',
        borderBottomStyle: 'solid',
        paddingBottom: 4,
    },
    jobTitle: {
        fontSize: 12,
        fontFamily: 'Helvetica-Bold',
        color: '#2d3748',
    },
    jobDetails: {
        fontSize: 10,
        marginBottom: 4,
        color: '#4a5568',
    },
    bulletPoint: {
        fontSize: 10,
        marginBottom: 2,
        paddingLeft: 10,
        color: '#4a5568',
    },
    skillCategory: {
        fontSize: 11,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 3,
        color: '#2d3748',
    },
    skill: {
        fontSize: 10,
        marginBottom: 1,
        color: '#4a5568',
    },
});

// Classic template styles
const classicStyles = StyleSheet.create({
    page: {
        backgroundColor: '#FFFFFF',
        padding: 40,
        fontFamily: 'Helvetica',
    },
    header: {
        marginBottom: 20,
        textAlign: 'center',
    },
    name: {
        fontSize: 24,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 5,
    },
    contact: {
        fontSize: 10,
        marginBottom: 3,
    },
    section: {
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 14,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        borderBottomStyle: 'solid',
        paddingBottom: 2,
    },
    jobTitle: {
        fontSize: 12,
        fontFamily: 'Helvetica-Bold',
    },
    jobDetails: {
        fontSize: 10,
        marginBottom: 4,
    },
    bulletPoint: {
        fontSize: 10,
        marginBottom: 2,
        paddingLeft: 10,
    },
    skillCategory: {
        fontSize: 11,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 2,
    },
    skill: {
        fontSize: 10,
        marginBottom: 1,
        paddingLeft: 10,
    },
    twoColumnGrid: {
        flexDirection: 'row',
        gap: 15,
    },
    column: {
        flex: 1,
    },
    skillsSection: {
        marginBottom: 8,
    },
    skillGroup: {
        marginBottom: 6,
    },
});

interface ResumePDFProps {
    data: ResumeData;
    variant: 'modern' | 'classic';
}

function ModernTemplate({ data }: { data: ResumeData }) {
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
                <View style={{ marginBottom: 15 }}>
                    <Text style={modernStyles.sectionTitle}>Experience</Text>
                    {data.work.map((job, index) => (
                        <View key={index} style={{ marginBottom: 10 }}>
                            <Text style={modernStyles.jobTitle}>{job.position}</Text>
                            <Text style={modernStyles.jobDetails}>
                                {job.name} | {job.location} | {formatDate(job.startDate)} - {formatDate(job.endDate)}
                            </Text>
                            {job.highlights.map((highlight, idx) => (
                                <Text key={idx} style={modernStyles.bulletPoint}>• {highlight}</Text>
                            ))}
                        </View>
                    ))}
                </View>

                <View style={{ marginBottom: 15 }}>
                    <Text style={modernStyles.sectionTitle}>Education</Text>
                    {data.education.map((edu, index) => (
                        <View key={index} style={{ marginBottom: 10 }}>
                            <Text style={modernStyles.jobTitle}>{edu.institution}</Text>
                            <Text style={modernStyles.jobDetails}>
                                {edu.studyType}
                                {edu.area ? ` in ${edu.area}` : ''} | {edu.location} | {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                            </Text>
                            {edu.courses && (
                                <Text style={modernStyles.bulletPoint}>
                                    Relevant Courses: {edu.courses.join(', ')}
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

            <View style={modernStyles.sidebar}>
                <View style={{ marginBottom: 15 }}>
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

                <View style={{ marginBottom: 15 }}>
                    <Text style={modernStyles.sectionTitle}>Languages</Text>
                    {data.languages.map((lang, index) => (
                        <Text key={index} style={modernStyles.skill}>
                            • {lang.language} ({lang.fluency})
                        </Text>
                    ))}
                </View>
            </View>
        </Page>
    );
}

function ClassicTemplate({ data }: { data: ResumeData }) {
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
                {data.work.map((job, index) => (
                    <View key={index} style={{ marginBottom: 8 }}>
                        <Text style={classicStyles.jobTitle}>{job.position}</Text>
                        <Text style={classicStyles.jobDetails}>
                            {job.name} | {job.location} | {formatDate(job.startDate)} - {formatDate(job.endDate)}
                        </Text>
                        {job.highlights.map((highlight, idx) => (
                            <Text key={idx} style={classicStyles.bulletPoint}>• {highlight}</Text>
                        ))}
                    </View>
                ))}
            </View>

            <View style={classicStyles.section}>
                <Text style={classicStyles.sectionTitle}>Education</Text>
                {data.education.map((edu, index) => (
                    <View key={index} style={{ marginBottom: 8 }}>
                        <Text style={classicStyles.jobTitle}>{edu.institution}</Text>
                        <Text style={classicStyles.jobDetails}>
                            {edu.studyType}
                            {edu.area ? ` in ${edu.area}` : ''} | {edu.location} | {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                        </Text>
                        {edu.courses && (
                            <Text style={classicStyles.bulletPoint}>
                                Relevant Courses: {edu.courses.join(', ')}
                            </Text>
                        )}
                    </View>
                ))}
            </View>

            <View style={classicStyles.twoColumnGrid}>
                <View style={classicStyles.column}>
                    <View style={classicStyles.skillsSection}>
                        <Text style={classicStyles.sectionTitle}>Skills</Text>
                        {data.skills.map((skillGroup, index) => (
                            <View key={index} style={classicStyles.skillGroup}>
                                <Text style={classicStyles.skillCategory}>{skillGroup.name}</Text>
                                {skillGroup.keywords.map((skill, idx) => (
                                    <Text key={idx} style={classicStyles.skill}>• {skill}</Text>
                                ))}
                            </View>
                        ))}
                    </View>
                </View>

                <View style={classicStyles.column}>
                    <View style={classicStyles.skillsSection}>
                        <Text style={classicStyles.sectionTitle}>Languages</Text>
                        {data.languages.map((lang, index) => (
                            <Text key={index} style={classicStyles.skill}>
                                • {lang.language} ({lang.fluency})
                            </Text>
                        ))}
                    </View>

                    {data.certificates && (
                        <View style={classicStyles.skillsSection}>
                            <Text style={classicStyles.sectionTitle}>Certificates</Text>
                            {data.certificates.map((cert, index) => (
                                <View key={index} style={{ marginBottom: 4 }}>
                                    <Text style={classicStyles.skillCategory}>{cert.name}</Text>
                                    <Text style={classicStyles.skill}>
                                        {cert.issuer} | {formatDate(cert.date)}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    )}
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