import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipes.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Receipe;
  constructor(private recipeService: RecipeService) { }
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Receipe) => {
      this.recipeService.recipeSelected.subscribe(
        (recipe: Receipe) => {
          this.selectedRecipe = recipe;
        }
      )
    })
  }

}
