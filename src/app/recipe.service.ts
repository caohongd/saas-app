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
  userId:string = "";

  constructor(private http: Http) { }

  setUserid(uId:string) {
    this.userId = uId;
  }

  validateLUsernameInfo(username:string) {
    return this.http.get( this.host + '/api/user/username/' + username)
    .map(response => response.json());
  }

  getAllRecipes() {
    return this.http.get( this.host + '/app/recipes')
    .map(response => response.json());
  }

  getDetailsForRecipe(pId: string) {
    return this.http.get( this.host + '/app/recipe/:recipeId' + pId)
    .map(response => response.json());
  }
}
