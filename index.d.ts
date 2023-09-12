export function levenshteinSimilarity(a: string, b: string): number;

export function jaccardSimilarity(str1: string, str2: string): number;

export function ngramSimilarity(str1: string, str2: string, n?: number): number;

export default function compareText(str1: string, str2: string): number;
