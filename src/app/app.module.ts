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
      { path: 'cocktails_no_alcohol', component: CocktailsNoAlcoholComponent },
      { path: '', redirectTo: 'laboratory', pathMatch: 'full' },
      { path: 'cocktails_alcool', component: CocktailsAlcoholComponent },
      { path: 'cocktails_list_no_alcool', component: CocktailsListNoAlcoholComponent},
      { path: '**', redirectTo: 'cocktails_no_alcohol', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
