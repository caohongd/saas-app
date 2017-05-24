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


  constructor(private RecipeService: RecipeService) { }

createRecipe(recipe: IRecipeModel){
  this.RecipeService.createRecipe(recipe).then((newRecipe: IRecipeModel) => {
    console.log(recipe);
  });
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
