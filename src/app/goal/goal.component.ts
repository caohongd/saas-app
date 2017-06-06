import {Component, OnInit } from '@angular/core';
import IRecipeModel from '../../models/IRecipeModel';
import { RecipeService } from '../recipe.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
Recipes: IRecipeModel[];
goal: string;

  constructor(private route: ActivatedRoute,
private recipe$: RecipeService) { 
  this.goal= route.snapshot.params['goal'];
    console.log('get results:' + this.goal);
  recipe$.getGoalRecipes(this.goal)
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
