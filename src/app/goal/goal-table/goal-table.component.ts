import {Input, Component, OnInit } from '@angular/core';
import IRecipeModel from '../../../models/IRecipeModel';

@Component({
  selector: 'goal-table',
  templateUrl: './goal-table.component.html',
  styleUrls: ['./goal-table.component.css']
})
export class GoalTableComponent implements OnInit {
@Input() recipe: IRecipeModel;
@Input() index: number;

  constructor() { }

  ngOnInit() {
    
    }
  }


