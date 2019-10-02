/**
 * @param {string} word
 * @return {number[]}
 * 
 */

 function buildPatternArray(word) {
     const patternTable = [0];
     let perfixIndex = 0;
     let suffixIndex = 1;

     while(suffixIndex < word.length) {
         if(word[perfixIndex] === word[suffixIndex]) {
             patternTable[suffixIndex] = perfixIndex + 1;
             suffixIndex += 1;
             perfixIndex += 1;
         } else if(perfixIndex === 0) {
             patternTable[suffixIndex] = 0;
             suffixIndex +=1;
         } else {
             perfixIndex = patternTable[perfixIndex -1];
         }
     }

     return patternTable;
 }

//  var a = buildPatternArray("aabaabaaa");
// [0, 1, 0, 1, 2, 3, 4, 5, 2]

/**
 * @param {string} text 
 * @param {string} word
 * @return {number}
 */
function KMPSubstringMatch(text, word) {
    if(word.length === 0 ) {
        return 0;
    }
    let textIndex = 0;
    let wordIndex = 0;

    const patternTable = buildPatternArray(word);

    while(textIndex < text.length) {
        if(text[textIndex] === word[wordIndex]) {
            if(wordIndex === word.length -1) {
                return (textIndex - word.length) +1;
            }
            wordIndex += 1;
            textIndex += 1;
        } else if( wordIndex > 0) {
            wordIndex = patternTable[wordIndex -1];
        } else {
            wordIndex = 0;
            textIndex += 1;
        }
    }
    
    return -1;

}