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
  public status = 'start';

  public startIndex =  0;
  public endIndex =  0;

  constructor(
    private route: ActivatedRoute,
    public articlesService: ArticlesService
  ) { }

  onPageChanged({start, end}: {start: number, end: number}) {
    this.startIndex = start;
    this.endIndex = end + 1;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const context = params.context;
      this.status = 'progress';

      this.articlesService.getArticles(context).subscribe(({response}) => {
        this.articles = response.results;
        this.status = this.articles.length ? 'results' : 'no_results';
      });
    });
  }

}
