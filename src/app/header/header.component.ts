import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  public context = '';

  constructor(
    private router: Router
  ) { }

  onInputChange() {
    this.router.navigate(['/search', this.context]);
  }

}
