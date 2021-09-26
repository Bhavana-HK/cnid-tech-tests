import { LoremIpsum } from 'lorem-ipsum';
import { useEffect, useState } from 'react';
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

export const useFetch = (
  callback: (page: number) => void,
  loading: boolean,
  lastResultCount?: number
) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      console.log(
        window.innerHeight + document.documentElement.scrollTop,
        document.documentElement.offsetHeight,
        lastResultCount,
        loading
      );
      const currentHeight =
        window.innerHeight + document.documentElement.scrollTop;
      const totalHeight = document.documentElement.offsetHeight;
      if (totalHeight - currentHeight < 50 && lastResultCount && !loading) {
        const newPage = page + 1;
        setPage(newPage);
        callback(newPage);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setPage, page, lastResultCount, loading]);
};
