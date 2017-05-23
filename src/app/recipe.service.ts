/*import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {

  constructor() { }

}
*/

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {
  host:string = 'http://localhost:8080';
 

  constructor(private http: Http) { }



  getAllRecipes() {
    return this.http.get( this.host + '/app/recipe')
    .map(response => response.json());
  }

  getDetailsForRecipe(pId: string) {
    return this.http.get( this.host + '/app/recipe/' + pId)
    .map(response => response.json());
  }
}
