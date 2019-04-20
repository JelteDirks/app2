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
                imageUrl: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&' +
                    'source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjQwpS_v' +
                    'tzhAhWFJFAKHflWByAQjRx6BAgBEAU&url=https%3A%2F%2Fwww' +
                    '.allesoveritaliaanseten.nl%2Frecepten%2Fspaghetti-met-' +
                    'courgette-kaas-en-worst%2F&psig=AOvVaw3fiNVS_if3e9PnmXF' +
                    'WRkg4&ust=1555774687877939',
                ingredients: ['pasta', 'sauce']
            }
        ];
    }

}
