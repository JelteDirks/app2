import {Injectable} from '@angular/core';
import {Recipe} from './recipes/recipe.model';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {
    private recipes: Recipe[] = [
        {
            id: '1',
            name: 'Spaghetti',
            imageUrl: 'https://www.okokorecepten.nl/i/recepten/kookboeken/' +
                '2008/happy-days-met-the-naked-chef/jamie-oliver-spaghetti' +
                '-salami-venkel-tomaten-500.jpg',
            ingredients: ['pasta', 'sauce']
        }
    ];

    constructor() {
    }

    public getAllRecipes(): Recipe[] {
        return [...this.recipes];
    }

    public getRecipe(id: string): Recipe | undefined {
        return {...this.recipes.find((r: Recipe) => r.id === id)};
    }
}
