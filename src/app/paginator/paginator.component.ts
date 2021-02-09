import {AfterViewInit, EventEmitter, Component, Input, OnInit, Output, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styles: [
  ]
})
export class PaginatorComponent implements OnInit, AfterViewInit {
  @Input() count = 0;
  @Output() pageChanged = new EventEmitter<any>();

  private perPage = 10;
  public start = 0;
  public end = 0;

  constructor() { }

  next() {
    this.start = Math.min(this.start + this.perPage, this.count);
    this.end = Math.min(this.start + this.perPage - 1, this.count);

    this.pageChanged.emit({start: this.start - 1, end: this.end - 1});
  }

  prev() {
    this.start = Math.max(this.start - this.perPage, 1);
    this.end = Math.min(this.start + this.perPage - 1, this.count);

    this.pageChanged.emit({start: this.start - 1, end: this.end - 1});
  }

  first() {
    this.start = 1;
    this.end = Math.min(this.start + this.perPage - 1, this.count);

    this.pageChanged.emit({start: this.start - 1, end: this.end - 1});
  }

  last() {
    this.start = Math.floor((this.count - 1) / this.perPage) * this.perPage + 1;
    this.end = Math.min(this.start + this.perPage - 1, this.count);

    this.pageChanged.emit({start: this.start - 1, end: this.end - 1});
  }

  ngOnInit(): void {
    this.start = 1;
    this.end = Math.min(this.perPage, this.count);
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.pageChanged.emit({start: this.start - 1, end: this.end - 1}));
  }

}
