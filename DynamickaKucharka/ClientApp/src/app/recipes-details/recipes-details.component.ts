import { Component, inject, signal } from '@angular/core';
import { RecipesService } from 'src/app/recipes.service';
import { RecipesDTO } from '../recipes/RecipesDTO';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent {
  recipeService = inject(RecipesService);
  private destroy$ = new Subject<void>();
  recipe= signal<RecipesDTO>(undefined);
  
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getClickedRecipes(id)
       .pipe(takeUntil(this.destroy$))
       .subscribe(result => this.recipe.set(result));
      
   }
}
