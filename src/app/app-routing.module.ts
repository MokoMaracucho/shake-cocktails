import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CocktailsNoAlcoholComponent } from './cocktails-no-alcohol/cocktails-no-alcohol.component';
import { CocktailsAlcoholComponent } from './cocktails-alcohol/cocktails-alcohol.component';
import { CocktailsListNoAlcoholComponent } from './cocktails-list-no-alcohol/cocktails-list-no-alcohol.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: 'cocktails_no_alcohol', component: CocktailsNoAlcoholComponent },
      { path: '', redirectTo: 'laboratory', pathMatch: 'full' },
      { path: 'cocktails_alcool', component: CocktailsAlcoholComponent },
      { path: 'cocktails_list_no_alcool', component: CocktailsListNoAlcoholComponent},
      { path: '**', redirectTo: 'cocktails_no_alcohol', pathMatch: 'full' }
    ])
  ]
})
export class AppRoutingModule { }
