export function formatDate(dateString: string): string {
    if (dateString === 'Present') return 'Present';

    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    });
} 