import {Input, Component, OnInit } from '@angular/core';
import IRecipeModel from '../../../models/IRecipeModel';

@Component({
  selector: 'recipe-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
@Input() recipe: IRecipeModel;
@Input() index: number;

  constructor() { }

  ngOnInit() {
    
    }
  }


