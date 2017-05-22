import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: '/cut', component: WelcomeComponent },
    { path: '/recipe/:recipeId', component: RecipeDetailsComponent}
];

export const routing = RouterModule.forRoot(routes);


