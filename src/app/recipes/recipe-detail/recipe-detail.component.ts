import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../recipe-list/recipe.service';
import {  ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class RecipeDetailComponent implements OnInit {
   recipe: Recipe;
   id: number;

  constructor(private recipeService: RecipeService,
  private route: ActivatedRoute,
  private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe((params: Params) =>{
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    })
  }
  onAddToShoppungList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
