import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { GoalComponent } from './goal/goal.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {UserRecipesComponent}  from'./user-recipes/user-recipes.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login',component: LoginComponent},
    { path: 'recipe', component: BrowseComponent },
    { path: 'recipe/:recipeId', component: RecipeDetailsComponent },
    { path: 'add_recipe', component: AddRecipeComponent },
    { path: 'recipe/:goal', component: GoalComponent },
    { path: 'myrecipes', component: UserRecipesComponent}
];

export const routing = RouterModule.forRoot(routes);


