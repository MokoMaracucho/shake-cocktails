import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
