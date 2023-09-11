import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ResolveSolverService } from './recipes/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes", title: 'recipe', component: RecipesComponent, children: [
      { path: "", component: RecipeStartComponent },
      { path: "new", component: RecipeEditComponent },
      { path: ":id", component: RecipesDetailsComponent ,resolve:[ResolveSolverService]},
      { path: ":id/edit", component: RecipeEditComponent,resolve:[ResolveSolverService] }
    ]
  },
  { path: "shopping-list", title: 'shopping-list', component: ShoppingListComponent },
  { path: "auth", title: 'Login', component: AuthComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
