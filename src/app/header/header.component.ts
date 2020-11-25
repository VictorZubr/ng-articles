import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  public context = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSearchClick() {
    console.log('onSearchClick', this.context);

  }
}
