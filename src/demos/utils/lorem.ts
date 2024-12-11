import { LoremIpsum } from 'lorem-ipsum';

export const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
})
 
// console.log(lorem.generateWords(2))     //几个单词
// console.log(lorem.generateSentences(5)) //几个句子
// console.log(lorem.generateParagraphs(7)) //几个段落