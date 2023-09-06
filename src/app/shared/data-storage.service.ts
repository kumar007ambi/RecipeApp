import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";


@Injectable({providedIn:'root'})

export class DataStorageService{
  constructor(private http:HttpClient,private recipeService:RecipeService){}

  getRecipes(){
    const recipes=this.recipeService.getRecipes();
  }
}