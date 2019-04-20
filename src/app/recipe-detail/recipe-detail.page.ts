import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {RecipesService} from '../recipes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.page.html',
    styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

    public recipe: Recipe;

    constructor(private recipesService: RecipesService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
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

    public onDeleteRecipe(): void {
        this.recipesService.deleteRecipe(this.recipe.id);
        this.router.navigate(['/recipes']);
    }
}
