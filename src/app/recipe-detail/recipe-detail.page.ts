import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {RecipesService} from '../recipes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.page.html',
    styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

    public recipe: Recipe;

    constructor(private recipesService: RecipesService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('recipeID')) {
                return;
            }

            const recipeID = paramMap.get('recipeID');
            this.recipe = this.recipesService.getRecipe(recipeID);
        });
    }

}
