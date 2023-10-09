import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";


import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesDetailsComponent } from "./recipes-details/recipes-details.component";
import { RecipeItemComponent } from "./recipes-list/recipe-item/recipe-item.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipesComponent } from "./recipes.component";




@NgModule({
    declarations: [
        RecipesComponent,
        RecipesListComponent,
        RecipesDetailsComponent,
        RecipeItemComponent,
        RecipeStartComponent,
        RecipeEditComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        RecipesComponent,
        RecipesListComponent,
        RecipesDetailsComponent,
        RecipeItemComponent,
        RecipeStartComponent,
        RecipeEditComponent,
    ]
})
export class RecipesModule { }