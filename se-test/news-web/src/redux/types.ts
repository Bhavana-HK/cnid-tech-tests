export type Article = {
  source: {
    id: number;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type Feed = {
  loading: boolean;
  error: string | null;
  articles: Article[];
  lastResultCount?: number;
};

export interface NewsState {
  newsFeed: Feed;
  searchFeed: Feed & { lastKey: string };
  currentArticle: Article | null;
}
