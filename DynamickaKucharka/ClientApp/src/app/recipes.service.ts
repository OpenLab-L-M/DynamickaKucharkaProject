import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RecipesDTO } from 'src/app/recipes/RecipesDTO'

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipesURL =   'recipes';
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }
  getRecipesList() {
    return this.http.get<RecipesDTO[]>(this.recipesURL)
  }
  Testujem() {
    return this.http.get<string>(this.recipesURL);
  }
}
