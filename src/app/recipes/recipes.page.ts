import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.page.html',
    styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

    public recipes: Recipe[];

    constructor() {
    }

    ngOnInit() {
        this.recipes = [
            {
                id: '1',
                name: 'Spaghetti',
                imageUrl: 'https://www.okokorecepten.nl/i/recepten/kookboeken/' +
                    '2008/happy-days-met-the-naked-chef/jamie-oliver-spaghetti' +
                    '-salami-venkel-tomaten-500.jpg',
                ingredients: ['pasta', 'sauce']
            }
        ];
    }

}
