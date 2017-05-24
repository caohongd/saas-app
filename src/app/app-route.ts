import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

const routes: Routes = [
    { path: 'recipe', component: BrowseComponent },
    { path: 'recipe/:recipeId', component: RecipeDetailsComponent },
    { path: 'add_recipe', component: AddRecipeComponent }
];

export const routing = RouterModule.forRoot(routes);


