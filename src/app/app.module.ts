import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CocktailsNoAlcoholComponent } from './cocktails-no-alcohol/cocktails-no-alcohol.component';
import { CocktailsAlcoholComponent } from './cocktails-alcohol/cocktails-alcohol.component';
import { CocktailsListNoAlcoholComponent } from './cocktails-list-no-alcohol/cocktails-list-no-alcohol.component';

@NgModule({
  declarations: [
    AppComponent,
    CocktailsNoAlcoholComponent,
    CocktailsAlcoholComponent,
    CocktailsListNoAlcoholComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'cocktail_no_alcohol', component: CocktailsNoAlcoholComponent },
      { path: '', redirectTo: 'cocktail_no_alcohol', pathMatch: 'full' },
      { path: 'cocktail_alcohol', component: CocktailsAlcoholComponent },
      { path: '**', redirectTo: 'cocktail_no_alcohol', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
