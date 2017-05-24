import { Input, Component, OnInit } from '@angular/core';
import IRecipeModel from '../../../models/IRecipeModel';

@Component({
  selector: 'app-detail-table',
  templateUrl: './detail-table.component.html',
  styleUrls: ['./detail-table.component.css']
})
export class DetailTableComponent implements OnInit {
@Input() recipe: IRecipeModel;

  constructor() { }

  ngOnInit() {
  }

}
