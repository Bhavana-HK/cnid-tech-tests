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

export interface NewsState {
  newsFeed: {
    loading: boolean;
    error: string | null;
    articles: Article[];
  };
  searchTerm: string;
  currentArticle: Article | null;
}
