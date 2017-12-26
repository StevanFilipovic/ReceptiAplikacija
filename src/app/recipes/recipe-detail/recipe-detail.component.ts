import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../recipe-list/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class RecipeDetailComponent implements OnInit {
   @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  onAddToShoppungList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
