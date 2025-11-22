/**
 * Sanitizes input strings to prevent injection attacks.
 * This is a utility intended to be used in generated projects.
 */
export function sanitize(input: string): string {
    if (!input) return '';
    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
