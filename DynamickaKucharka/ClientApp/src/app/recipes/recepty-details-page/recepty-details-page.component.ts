import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe'

@Component({
  selector: 'app-recepty-details-page',
  templateUrl: './recepty-details-page.component.html',
  styleUrls: ['./recepty-details-page.component.css']
})
export class ReceptyDetailsPageComponent {
  @Input() selectedProduct: Recipe;
}
