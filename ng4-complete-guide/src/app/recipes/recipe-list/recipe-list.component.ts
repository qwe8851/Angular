import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor() {
    this.recipes = [
      new Recipe(
        'A Test Recipe',
        'This is simply a test',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS30uO3rYwXBlzaMTZ_aFPaYBg4hjI32CnfGwwhp-kaiqGyY4uVcItf7x-FRBVpNheuqY&usqp=CAU'
      ),
    ];
  }

  ngOnInit(): void {}
}



