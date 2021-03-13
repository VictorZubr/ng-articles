export interface Article {
  id: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  pillarName: string;
  sectionName: string;
}

export interface ArticleResponse {
  response: {
    results: Article[];
  };
}
