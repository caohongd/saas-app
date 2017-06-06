/*import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {

  constructor() { }

}
*/

import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import IRecipeModel from '../models/IRecipeModel';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecipeService {
  host:string = '';
 

  constructor(private http: Http) { }



  getAllRecipes() {
    return this.http.get( this.host + '/app/recipe')
    .map(response => response.json());
  }

  getAllUserRecipes(userID: string) {
    return this.http.get( this.host + '/app/usersrecipes/' + userID)
    .map(response => response.json());
  }

  getDetailsForRecipe(pId: number) {
    return this.http.get( this.host + '/app/recipe/' + pId)
    .map(response => response.json());
  }

    getGoalRecipes(gId: string) {
    return this.http.get( this.host + '/app/recipe/' + gId)
    .map(response => response.json());
  }

  createRecipe(newRecipe: IRecipeModel): Observable<any>{
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });

    return this.http.post(this.host + '/app/recipe/', 
                          JSON.stringify(newRecipe), 
                          options);
  }

  getUserInfo() {
    return this.http.get( this.host + '/auth/userdata')
    .map(response => response.json());
  }

  private handleError(error:any){
    let errMsg= (error.message) ? error.message:
    error.status ? '${error.status} - ${error.statusText}': 'Server error';
    console.error(errMsg);
  }
}

