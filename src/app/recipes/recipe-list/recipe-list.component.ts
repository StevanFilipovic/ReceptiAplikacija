import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://www.bbcgoodfood.com/sites/default/files/styles/category_retina/public/recipe-collections/collection-image/2013/05/roast-rack-of-pork-with-wild-garlic-stuffing_1.jpg?itok=cEkOemrO'),
    new Recipe('Another Test Recipe','This is simply a test','https://www.bbcgoodfood.com/sites/default/files/styles/category_retina/public/recipe-collections/collection-image/2013/05/roast-rack-of-pork-with-wild-garlic-stuffing_1.jpg?itok=cEkOemrO')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
      this.recipeWasSelected.emit(recipe);
  }

}
