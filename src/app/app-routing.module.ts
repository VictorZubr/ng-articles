import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SearchResultsComponent} from './search-results/search-results.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  { path: 'search/:context', component: SearchResultsComponent},
  { path: '', component: NotFoundComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
