import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';
import IRecipeModel from '../../models/IRecipeModel';

@Component({
  selector: 'app-list',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  Recipes: IRecipeModel[];

  constructor(recipe$: RecipeService) { 
    recipe$.getAllRecipes()
    .subscribe(
      result => {
        this.Recipes = result;
        console.log('result:' + this.Recipes.toString());
      },
      () => console.log('Error calling REST'),
      () => console.log('REST call:' + this.Recipes)
    );
  }

  ngOnInit() {
  }

}

