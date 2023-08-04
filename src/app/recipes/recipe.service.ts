import { EventEmitter, Injectable } from "@angular/core";
import { Receipe } from "./receipes.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShopingListService } from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Receipe>();

    constructor(private slService:ShopingListService){}

    private recipes: Receipe[] = [
        new Receipe('A Test Receipe',
         'This is simply test',
          'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg',
          [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20),
          ]),
        new Receipe('Another Test Receipe',
         'This is simply test',
          'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg',
          [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1),
          ])
    ] as any;
    
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
      this.slService.addIngredients(ingredients)
    }
}