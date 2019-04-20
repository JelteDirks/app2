import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {RecipesService} from '../recipes.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.page.html',
    styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

    public recipe: Recipe;

    constructor(private recipesService: RecipesService,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private alertController: AlertController) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('recipeID')) {
                this.router.navigate(['/recipes']);
                return;
            }

            const recipeID = paramMap.get('recipeID');
            this.recipe = this.recipesService.getRecipe(recipeID);
        });
    }

    public onDeleteRecipe(): void {
        this.alertController.create({
            header: 'Are you sure?',
            message: `You are about to delete the recipe for ${this.recipe.name}`,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: () => {
                        this.recipesService.deleteRecipe(this.recipe.id);
                        this.router.navigate(['/recipes']);
                    }
                }
            ]
        }).then(alertElement => alertElement.present());
    }
}
