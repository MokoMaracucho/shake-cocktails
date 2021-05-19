import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CocktailsNoAlcoholComponent } from './cocktails-no-alcohol/cocktails-no-alcohol.component';
import { CocktailsAlcoholComponent } from './cocktails-alcohol/cocktails-alcohol.component';
import { CocktailsListNoAlcoholComponent } from './cocktails-list-no-alcohol/cocktails-list-no-alcohol.component';
import { CocktailsNoAlcoholModule } from './cocktails-no-alcohol/cocktails-no-alcohol.module';
import { CocktailsAlcoholModule } from './cocktails-alcohol/cocktails-alcohol.module';
import { CocktailsListNoAlcoholModule } from './cocktails-list-no-alcohol/cocktails-list-no-alcohol.module';
import { AppRoutingModule } from './app-routing.module';

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
    CocktailsNoAlcoholModule,
    CocktailsAlcoholModule,
    CocktailsListNoAlcoholModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
