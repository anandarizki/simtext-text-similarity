const assert = require("assert");
const { 
  levenshteinSimilarity, 
  jaccardSimilarity, 
  ngramSimilarity, 
  compareText 
} = require('./dist/index.js');

const testLevenshtein = () => {
  assert.strictEqual(levenshteinSimilarity("kitten", "sitting"), (7 - 3) / 7);
  assert.strictEqual(levenshteinSimilarity("flaw", "lawn"), (4 - 2) / 4);
};

const testJaccard = () => {
  assert.strictEqual(
    jaccardSimilarity("the cat in the hat", "the cat on the mat"),
    1 / 3
  );
  assert.strictEqual(jaccardSimilarity("a b c", "a b d"), 2 / 4);
};

const testNgram = () => {
  assert.strictEqual(ngramSimilarity("test", "tent"), 1 / 5);
  assert.strictEqual(ngramSimilarity("hello", "helly"), 3 / 5);
};

const testDecisionFunction = () => {
  assert.strictEqual(
    compareText("hello", "helly"),
    levenshteinSimilarity("hello", "helly")
  );

  assert.strictEqual(
    compareText("hello world", "helly world"),
    ngramSimilarity("hello world", "helly world")
  );

  const longStr1 =
    "this is a long sentence with a lot of words to test the decision function";
  const longStr2 =
    "this is another long sentence with many words to test the decision function";
  assert.strictEqual(
    compareText(longStr1, longStr2),
    ngramSimilarity(longStr1, longStr2, 3)
  );
};

testLevenshtein();
testJaccard();
testNgram();
testDecisionFunction();
console.log("All tests passed!");
