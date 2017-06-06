import {Input, Component, OnInit } from '@angular/core';
import IRecipeModel from '../../../models/IRecipeModel';
import { UserRecipesComponent } from '../user-recipes.component';

@Component({
  selector: 'urecipe-table',
  templateUrl: './userrec-table.component.html',
  styleUrls: ['./userrec-table.component.css']
})
export class UserrecTableComponent implements OnInit {
@Input() recipe: IRecipeModel;
@Input() index: number;

  constructor() { }

  ngOnInit() {
    
    }
  }

