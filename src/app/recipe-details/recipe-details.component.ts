import {Component, OnInit } from '@angular/core';
import IRecipeModel from '../../models/IRecipeModel';
import { RecipeService } from '../recipe.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
recipeObject: IRecipeModel;
recipeId: number;
recipeTitle: string;
ingredients: string;
instructions: string;
calories: number;
protein: number;
fat: number;
carbs: number;
sugar: number;
//recipeList: IRecipeModel[];
//name: string;
//recipe: IRecipeModel;

  constructor(
    private route: ActivatedRoute,
    private recipe$: RecipeService
  ) {
    this.recipeId= route.snapshot.params['recipeId'];
    console.log('get results:' + this.recipeId);
    recipe$.getDetailsForRecipe(this.recipeId).subscribe(
      result => {
        this.recipeObject=result;
        this.recipeTitle = this.recipeObject.recipeTitle;
        this.ingredients = this.recipeObject.ingredients;
        this.instructions = this.recipeObject.instructions;
        this.calories = this.recipeObject.calories;
        this.protein = this.recipeObject.protein;
        this.fat = this.recipeObject.fat;
        this.carbs = this.recipeObject.carbs;
        this.sugar = this.recipeObject.sugar;
        //this.name = "Post";
  },
      () => {},
      () => {}
    );
  }
    /*this.recipeId= route.snapshot.params['id'];
    recipe$.getDetailsForRecipe(this.recipeId)
    .subscribe(
      result => {
        this.recipeList= result;
        this.name = "Post";
      },
      () => {},
      () => {}
    );
   }
*/

  ngOnInit():void{
    //this.getResults();
  }
  
  /* ngOnChanges(){
    this.getResults();
  }

  public getResults(){
    this.id= this.route.snapshot.params.recipeId;
    console.log('get results:' + this.id);
    this.recipe$.getDetailsForRecipe(this.id).subscribe(
      result => {
        this.recipeObject=result;
        //console.log('recipeObject: ' + this.recipeObject);
        //console.log('result: ' + result);
      }
    )
    //console.log('recipe$: ' + this.recipe$);
  } */

}
