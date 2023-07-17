import { Component, EventEmitter, Output } from '@angular/core';
import { Receipe } from '../receipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  @Output() recipeWasSelected = new EventEmitter<Receipe>();
  recipes: Receipe[] = [
    new Receipe('A Test Receipe', 'This is simply test', 'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg'),
    new Receipe('Another Test Receipe', 'This is simply test', 'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg')
  ] as any;

  onRecipeSelected(recipe: Receipe) {
     this.recipeWasSelected.emit(recipe)
  }
}
