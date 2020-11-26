import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Article } from '../interfaces';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styles: [
  ]
})
export class SearchResultsComponent implements OnInit {
  public articles: Article[] = [];

  constructor(
    private route: ActivatedRoute,
    public articlesService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const context = params.context;

      this.articlesService.getArticles(context).subscribe(({response}) => {
        this.articles = response.results;
      });
    });
  }

}
