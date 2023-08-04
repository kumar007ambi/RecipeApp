import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
  
})
export class RecipesListComponent implements OnInit {
  recipes: Receipe[] = [] as any;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

 
}
