import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe( 'A Test Recipe', 'This is simply a test', 'https://149401384.v2.pressablecdn.com/wp-content/uploads/2021/02/rigatoni-alla-vodka-1-scaled.jpg' ) ,
    new Recipe( 'A Test Recipe', 'This is simply a test', 'https://149401384.v2.pressablecdn.com/wp-content/uploads/2021/02/rigatoni-alla-vodka-1-scaled.jpg' ) 
  ];

  constructor() { }

  ngOnInit(): void {
  }
  addRecipes() { 
    console.log(1)
  }
}
