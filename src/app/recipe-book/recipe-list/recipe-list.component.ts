import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe("Test Recipe", "This is a test recipe.", "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg"),
    new Recipe("Another Test Recipe", "This is another test.", "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"),
      ];
}
