import { Component, Input } from '@angular/core';
import { Receipe } from '../../receipes.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],

})
export class RecipeItemComponent {
  @Input() recipe: Receipe;

  constructor(private recipeService: RecipeService) { }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
