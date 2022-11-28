import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipe-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';



@NgModule({
  declarations: [
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecipesModule { }
