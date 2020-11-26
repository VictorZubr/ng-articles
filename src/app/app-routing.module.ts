import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchResultsComponent } from './search-results/search-results.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: HeaderComponent},
  { path: 'search/:context', component: SearchResultsComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
