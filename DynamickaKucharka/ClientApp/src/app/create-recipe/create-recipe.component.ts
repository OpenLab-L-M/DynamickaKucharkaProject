import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
  imports: [ReactiveFormsModule],
})
export class CreateRecipeComponent {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
    diff: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
  });
}
