
# SimText - Lightweight Text Similarity Calculator

**SimText** is a minimalistic and lightweight text similarity calculator designed for efficiency and ease-of-use. SimText provides a streamlined approach to measure textual likeness.


## Features

- 🪶 **Lightweight**: Crafted with performance in mind, SimText ensures fast calculations without bogging down your applications.

- 🔍 **Multiple Algorithms**:

  -  **Levenshtein Distance**: Ideal for single, short words, offering a precise measure of character-level differences.

  -  **Jaccard Similarity**: Computes similarity between sets of words, making it great for longer texts.

  -  **N-gram Similarity**: Versatile and adaptable, it breaks down text into overlapping chunks for a nuanced similarity measure.

- 🎯 **Contextual Selection**: Based on the length and nature of your text inputs, SimText intelligently chooses the most suitable algorithm to offer you the best similarity results.

  

## Installation

```bash

npm install  simtext  --save

```

  

## Usage
This guide provides instructions on how to use the exported functions designed to measure the similarity between two strings. These methods include Levenshtein similarity, Jaccard similarity, n-gram similarity, and a general text comparison function.

### 1. **levenshteinSimilarity(a: string, b: string): number**
Compares two strings and returns a similarity score based on the Levenshtein distance.

-   **Parameters**:
    -   `a`: First string.
    -   `b`: Second string.
-   **Return**: Similarity score between 0 and 1. A score of 1 means the strings are identical.

```javascript
import {levenshteinSimilarity} from 'simtext';

const score = levenshteinSimilarity("apples", "apple");
console.log(score);  // 0.8333333333333334
```
### 2. **jaccardSimilarity(str1: string, str2: string): number**

Calculates the Jaccard similarity between two strings, comparing the unique words in each string.

-   **Parameters**:
    -   `str1`: First string.
    -   `str2`: Second string.
-   **Return**: Similarity score between 0 and 1.

```javascript
import {jaccardSimilarity} from 'simtext';

const score = jaccardSimilarity("apple pie", "apple crumble pie");
console.log(score);  // 0.6666666666666666
```

### 3. **ngramSimilarity(str1: string, str2: string, n?: number): number**

Computes the n-gram similarity between two strings. This divides the strings into 'n' consecutive characters and then compares them.

-   **Parameters**:
    -   `str1`: Fienter code hererst string.
    -   `str2`: Second string.
    -   `n`: (Optional) Number of characters for the n-gram. Default is 2.
-   **Return**: Similarity score between 0 and 1.


```javascript
import {ngramSimilarity} from 'simtext';

const score = ngramSimilarity("Roses are red, violets are blue", "Roses are red and the sky is blue", 2);
console.log(score);  // 0.4166666666666667
```

### 4. **compareText(str1: string, str2: string, options?: {n: number}): number**

A comprehensive function that determines the most appropriate similarity method based on the nature of the input strings.

-   **Parameters**:
    -   `str1`: First string.
    -   `str2`: Second string.
    -   `options` : (Optional) 
        - `n` Number of characters for the n-gram. Default is 2.
-   **Return**: Similarity score between 0 and 1, using the method deemed best for the input strings.


```javascript
import {compareText} from 'simtext';

const score = compareText("apple", "appel");
console.log(score);  // 0.6.
```

**Note**: The `compareText` function uses heuristics to choose the similarity method. For example, if both strings are single words and under 10 characters, it uses the `levenshteinSimilarity`. If the character count of both strings combined is above 200, it uses `jaccardSimilarity`. Otherwise, it uses `ngramSimilarity`.