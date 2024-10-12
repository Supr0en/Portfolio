import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form: FormGroup;
  isOpen = false; // State to control bottom sheet visibility
  
  constructor(private fb: FormBuilder) {
    // Create the form with FormBuilder
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  open(): void {
    this.isOpen = true;  // Open the bottom sheet
  }

  close(): void {
    this.isOpen = false;  // Close the bottom sheet
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted', this.form.value);
      this.close();  // Close after submission
    } else {
      alert('Please fill in all fields');
    }
  }
}
