import {Component, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  SelectRecipe(recipe: Recipe){
    this.selectedRecipe.emit(recipe);
  }
  recipes:Recipe[] = [
    new Recipe("Egg Salad",
      "This is a test recipe.",
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg",
      [new Ingredient("eggs", 12, "whole"),
                new Ingredient("salad", 8, "cups")],),
    new Recipe("Cheeseburger",
      "This is another test.",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      [new Ingredient("Cheese", 3, "slices"),
                new Ingredient("Beef", 4, "patties"),
                new Ingredient("Buns", 2, "full"),
    ])];
}
