import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipes.model";
import { map ,tap} from "rxjs/operators";


@Injectable({ providedIn: 'root' })

export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://ng-course-recipe-bf965-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe(
        responce => {
          console.log(responce)
        });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://ng-course-recipe-bf965-default-rtdb.firebaseio.com/recipes.json')
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            }
          })
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes)
        })
      )
  }
}