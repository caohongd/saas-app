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
recipeObject: any[];
id: string;
//recipeList: IRecipeModel[];
//name: string;
//recipe: IRecipeModel;

  constructor(
    private route: ActivatedRoute,
    private recipe$: RecipeService
  ) {}
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

  ngOnInit(){
    this.getResults();
  }
  
  ngOnChanges(){
    this.getResults();
  }

  public getResults(){
    this.id= /*this.route.snapshot.queryParams['q']*/ '1';
    
    this.recipe$.getDetailsForRecipe(this.id).subscribe(
      result => {
        this.recipeObject=result;
      }
    )
  }

}
