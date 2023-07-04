import { Component } from '@angular/core';
import { Receipe } from '../receipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  receipes: Receipe[] = [
    new Receipe('A Test Receipe','This is simply test','https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg'),
    new Receipe('A Test Receipe','This is simply test','https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg')
  ] as any;
}
