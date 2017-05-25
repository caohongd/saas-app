import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';
import IRecipeModel from '../../models/IRecipeModel';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
@Input() recipe: IRecipeModel;
@Input() createHandler: Function;


  constructor(private RecipeService: RecipeService) { 
        var testRecipe :
  {
    recipeTitle: 'Test',
    recipeId: 400,
    ingredients: 'Testing Stuff',
    instructions: 'Do nothing',
    calories: 500,
    protein: 30,
    fat: 20,
    carbs: 10,
    sugar: 10,
  }
  this.RecipeService.createRecipe(testRecipe);
  }



createRecipe(recipe: IRecipeModel){
  this.RecipeService.createRecipe(recipe).subscribe(() => {}, () => {});
}

/*createNewRecipe(){
  var recipe2: IRecipeModel= {
    recipeTitle: '',
    ingredients: '',
    instructions: ''
  }
};*/

  ngOnInit() {
  }

}
