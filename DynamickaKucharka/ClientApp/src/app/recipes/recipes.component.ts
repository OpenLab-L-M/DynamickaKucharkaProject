import { Component, Input, OnDestroy, OnInit, signal, Pipe, PipeTransform, inject } from '@angular/core';
import { RecipesDTO } from 'src/app/recipes/RecipesDTO'
import { RecipesService } from 'src/app/recipes.service'
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  recipeService = inject(RecipesService);
  recipes? = signal<RecipesDTO[]>([]);
  private destroy$ = new Subject<void>();
  constructor() { }
  ngOnInit(): void {
    this.recipeService.getRecipesList()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => this.recipes.set(result));
    /*this.recipeService.Testujem()
      .pipe(takeUntil(this.destroy$))
      .subscribe( result =>console.log(result))*/
  }
  /*products = [
    {
      id: 1,
      name: "Spaghetti",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      difficulty: "easy",
      imageURL: "https://img.freepik.com/free-photo/pasta-spaghetti-with-tomato-sauce-cheese-served-plate_1220-6910.jpg?w=900&t=st=1706977232~exp=1706977832~hmac=202af646197cd9ec09381b955b869589191163e0b8a86d3376aba48ba569286d"
    },
    {
      id: 2,
      name: "Spaghetti",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      difficulty: "hard",
      imageURL: "https://img.freepik.com/free-photo/pasta-spaghetti-with-tomato-sauce-cheese-served-plate_1220-6910.jpg?w=900&t=st=1706977232~exp=1706977832~hmac=202af646197cd9ec09381b955b869589191163e0b8a86d3376aba48ba569286d"
    },
    {
      id: 3,
      name: "Spaghetti",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      difficulty: "easy",
      imageURL: "https://img.freepik.com/free-photo/pasta-spaghetti-with-tomato-sauce-cheese-served-plate_1220-6910.jpg?w=900&t=st=1706977232~exp=1706977832~hmac=202af646197cd9ec09381b955b869589191163e0b8a86d3376aba48ba569286d"
    },
    {
      id: 4,
      name: "Spaghetti",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      difficulty: "easy",
      imageURL: "https://img.freepik.com/free-photo/pasta-spaghetti-with-tomato-sauce-cheese-served-plate_1220-6910.jpg?w=900&t=st=1706977232~exp=1706977832~hmac=202af646197cd9ec09381b955b869589191163e0b8a86d3376aba48ba569286d"
    },
    {
      id: 5,
      name: "Spaghetti",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      difficulty: "medium",
      imageURL: "https://img.freepik.com/free-photo/pasta-spaghetti-with-tomato-sauce-cheese-served-plate_1220-6910.jpg?w=900&t=st=1706977232~exp=1706977832~hmac=202af646197cd9ec09381b955b869589191163e0b8a86d3376aba48ba569286d"
    },
    {
      id: 6,
      name: "Spaghetti",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      difficulty: "easy",
      imageURL: "https://img.freepik.com/free-photo/pasta-spaghetti-with-tomato-sauce-cheese-served-plate_1220-6910.jpg?w=900&t=st=1706977232~exp=1706977832~hmac=202af646197cd9ec09381b955b869589191163e0b8a86d3376aba48ba569286d"
    },
    {
      id: 7,
      name: "Spaghetti",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      difficulty: "hard",
      imageURL: "https://img.freepik.com/free-photo/pasta-spaghetti-with-tomato-sauce-cheese-served-plate_1220-6910.jpg?w=900&t=st=1706977232~exp=1706977832~hmac=202af646197cd9ec09381b955b869589191163e0b8a86d3376aba48ba569286d"
    },
    {
      id: 8,
      name: "Spaghetti",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      difficulty: "medium ",
      imageURL: "https://img.freepik.com/free-photo/pasta-spaghetti-with-tomato-sauce-cheese-served-plate_1220-6910.jpg?w=900&t=st=1706977232~exp=1706977832~hmac=202af646197cd9ec09381b955b869589191163e0b8a86d3376aba48ba569286d"
    }
  ]*/
}
