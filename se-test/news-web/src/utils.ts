import { LoremIpsum } from 'lorem-ipsum';
import { useLocation } from 'react-router';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export const getLorem = () => lorem.generateParagraphs(4);

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
