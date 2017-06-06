import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

import { APP_BASE_HREF } from '@angular/common';
import { routing } from './app-route';


import { RecipeService } from './recipe.service';
import { TableComponent } from './browse/table/table.component';
import { DetailTableComponent } from './recipe-details/detail-table/detail-table.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { GoalComponent } from './goal/goal.component';
import { GoalTableComponent } from './goal/goal-table/goal-table.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



const appRoutes: Routes = [
  {path: 'browse', component: BrowseComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
   RecipeDetailsComponent,
   TableComponent,
   DetailTableComponent,
   AddRecipeComponent,
   GoalComponent,
   GoalTableComponent,
   HomeComponent,
   LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ {provide: APP_BASE_HREF, useValue: '/'}, RecipeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
