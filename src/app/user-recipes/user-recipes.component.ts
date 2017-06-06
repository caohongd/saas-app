import {Component, OnInit } from '@angular/core';
import IRecipeModel from '../../models/IRecipeModel';
import { RecipeService } from '../recipe.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.css']
})

export class UserRecipesComponent implements OnInit {

RecipeObject: IRecipeModel;
createdUser: string;

Recipes: IRecipeModel[];
//createID= 
  constructor(recipe$: RecipeService) { 
  recipe$.getUserInfo().subscribe(
        result => {
          this.createdUser = result.id;
          console.log('User ID: ' + this.createdUser);

          recipe$.getAllUserRecipes(this.createdUser)
            .subscribe(
              result => {
                this.Recipes = result;
                console.log('result:' + this.Recipes.toString());
              },
      () => console.log('Error calling REST'),
      () => console.log('REST call:' + this.Recipes)
    );
        },        
        () => { this.createdUser = "not logged in"},
        () => console.log('REST call' + this.createdUser)
      );
  }
  


  ngOnInit() {
  }

}
