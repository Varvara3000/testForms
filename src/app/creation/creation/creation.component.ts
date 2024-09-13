import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-creation',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf, RouterLink],
  templateUrl: './creation.component.html',
  styleUrl: './creation.component.css',
})
export class CreationComponent implements OnInit {
  constructor(private router: Router) {}

  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      age: new FormControl('', [Validators.required, Validators.min(3)]),
      summary: new FormControl('', [
        Validators.minLength(0),
        Validators.maxLength(200),
      ]),
    });
  }

  register() {
    console.log(this.form);
  }

    adjustHeight(event: Event) {
      const textarea = event.target as HTMLTextAreaElement;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }

  goToRegistration() {
    this.router.navigate(['registration']);
  }
}
