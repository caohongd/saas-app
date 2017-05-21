import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

import { APP_BASE_HREF } from '@angular/common';
import { routing } from './app-route';




@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
   RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [ {provide: APP_BASE_HREF, useValue: '/'}, SocialService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
