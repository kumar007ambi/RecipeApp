import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Receipe } from '../../receipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Receipe;
  @Output() receipeSelected = new EventEmitter<void>();
  
  onSelected() {
    this.receipeSelected.emit();
  }
  constructor() { }
}
