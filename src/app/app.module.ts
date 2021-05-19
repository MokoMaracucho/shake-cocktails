import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CocktailsNoAlcoholComponent } from './cocktails-no-alcohol/cocktails-no-alcohol.component';

@NgModule({
  declarations: [
    AppComponent,
    CocktailsNoAlcoholComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
