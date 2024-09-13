import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css',
})
export class RatingComponent implements OnInit {
  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      episode: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      rating: new FormControl('', [Validators.required]),
      review: new FormControl('', [
        Validators.minLength(10),
        Validators.maxLength(500),
      ]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }
  adjustHeight(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  isThisFormValid() {
    return ( this.form.valid &&
      ( this.form.get('episode')?.valid &&
      this.form.get('rating')?.valid &&
      this.form.get('review')?.valid &&
      this.form.get('name')?.valid
      ) );
  }
}
