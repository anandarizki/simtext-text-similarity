# SimText - Lightweight Text Similarity Calculator

**SimText** is a minimalistic and lightweight text similarity calculator designed for efficiency and ease-of-use. SimText provides a streamlined approach to measure textual likeness.

---

## Features

- 🪶 **Lightweight**: Crafted with performance in mind, SimText ensures fast calculations without bogging down your applications.
- 🔍 **Multiple Algorithms**:
  - **Levenshtein Distance**: Ideal for single, short words, offering a precise measure of character-level differences.
  - **Jaccard Similarity**: Computes similarity between sets of words, making it great for longer texts.
  - **N-gram Similarity**: Versatile and adaptable, it breaks down text into overlapping chunks for a nuanced similarity measure.
- 🎯 **Contextual Selection**: Based on the length and nature of your text inputs, SimText intelligently chooses the most suitable algorithm to offer you the best similarity results.

---

## Installation

```bash
npm install simtext --save
```

## Usage Examples

```javascript
import {
  levenshteinSimilarity,
  jaccardSimilarity,
  ngramSimilarity,
  compareText,
} from "simtext";
```

```javascript
const {
  levenshteinSimilarity,
  jaccardSimilarity,
  ngramSimilarity,
  compareText,
} = require("simtext");
```

When you use `compareText`, it will decide which method to use based on the string length.

### 1. Basic Comparison

Easily compare two strings to determine their similarity.

```javascript
import { compareText } from "simtext";

const similarity = compareText("apple", "apples");
console.log(similarity); // 0.8333333333333334
```

### 2. Comparing Short Phrases

SimText smartly selects the right algorithm based on the nature of the input.

```javascript
const result = compareText("apple pie", "apple crumble pie");
console.log(result); // 0.5714285714285714
```

### 3. Working with Longer Texts

For longer texts, SimText uses either the Jaccard similarity or N-gram method, depending on the combined length of the texts.

```javascript
const text1 = "Roses are red, violets are blue";
const text2 = "Roses are red and the sky is blue";
const similarityScore = compareText(text1, text2);
console.log(similarityScore); // 0.3333333333333333
```

**Note**: Remember that the result can be either a similarity score (a float between 0 and 1) or a distance value (integer), depending on the chosen algorithm for the input texts.
