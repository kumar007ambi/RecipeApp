import { Component, Input } from '@angular/core';
import { Receipe } from '../receipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent {
   @Input() recipe:Receipe
   
   constructor(private recipeService:RecipeService){}

   onAddToShoppingList(){
     this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
   }
}
