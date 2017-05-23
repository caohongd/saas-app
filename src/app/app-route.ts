import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';


const routes: Routes = [
    { path: 'recipe', component: BrowseComponent },
    { path: 'recipe/:recipeId', component: RecipeDetailsComponent }
];

export const routing = RouterModule.forRoot(routes);


