export interface Article {
  id: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
}

export interface ArticleResponse {
  response: {
    results: Article[];
  };
}
