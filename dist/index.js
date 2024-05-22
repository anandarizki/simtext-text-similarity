"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareText = exports.ngramSimilarity = exports.levenshteinSimilarity = void 0;
function levenshtein(a, b) {
    if (a.length === 0)
        return b.length;
    if (b.length === 0)
        return a.length;
    const matrix = [];
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            }
            else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
            }
        }
    }
    return matrix[b.length][a.length];
}
function levenshteinSimilarity(a, b) {
    const distance = levenshtein(a, b);
    const maxLength = Math.max(a.length, b.length);
    return (maxLength - distance) / maxLength;
}
exports.levenshteinSimilarity = levenshteinSimilarity;
function jaccardSimilarity(str1, str2) {
    if (!str1 || !str2) {
        throw new Error("String is empty");
    }
    const set1 = new Set(str1.split(" "));
    const set2 = new Set(str2.split(" "));
    const intersection = new Set([...set1].filter((word) => set2.has(word)));
    return intersection.size / (set1.size + set2.size - intersection.size);
}
function ngramSimilarity(str1, str2, n = 2) {
    if (!n) {
        throw new Error("Invalid arguments");
    }
    const getNgrams = (text, n) => {
        const ngrams = [];
        for (let i = 0; i <= text.length - n; i++) {
            ngrams.push(text.slice(i, i + n));
        }
        return new Set(ngrams);
    };
    const set1 = getNgrams(str1, n);
    const set2 = getNgrams(str2, n);
    const intersection = new Set([...set1].filter((gram) => set2.has(gram)));
    return intersection.size / (set1.size + set2.size - intersection.size);
}
exports.ngramSimilarity = ngramSimilarity;
function compareText(str1, str2, options) {
    if (str1.trim().length === 0 || str2.trim().length === 0) {
        throw new Error("Neither input can be empty.");
    }
    const len1 = str1.split(" ").length;
    const len2 = str2.split(" ").length;
    if (len1 === 1 && str1.length <= 10 && len2 === 1 && str2.length <= 10) {
        return levenshteinSimilarity(str1, str2);
    }
    else if (len1 <= 3 && len2 <= 3) {
        return ngramSimilarity(str1, str2);
    }
    else {
        const charCount = str1.length + str2.length;
        if (charCount > 200) {
            return jaccardSimilarity(str1, str2);
        }
        else {
            return ngramSimilarity(str1, str2, options === null || options === void 0 ? void 0 : options.n);
        }
    }
}
exports.compareText = compareText;
