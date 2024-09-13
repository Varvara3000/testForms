import { Component, OnInit } from '@angular/core';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, NgClass, NgForOf],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;
  constructor(private router:Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      monday: new FormControl(false),
      wednesday: new FormControl(false),
      friday: new FormControl(false),
      comment: new FormControl('', [Validators.maxLength(150)]),
    });
  }
  adjustHeight(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  isThisFormValid(): boolean {
    return (
      this.form.valid &&
      (this.form.get('monday')?.value ||
        this.form.get('wednesday')?.value ||
        this.form.get('friday')?.value)
    );

  }

  goToRating() {
    this.router.navigate(['rating']);
  }
}
