import { Component, Input } from '@angular/core';
import { Receipe } from '../receipes.model';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent {
   @Input() recipe:Receipe
}
