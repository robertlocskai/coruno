import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

export type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'date'
  | 'tel'
  | 'number'
  | 'checkbox';

export type InputSize = 'normal' | 'large';
export type InputWidth = 'full' | 'auto';

@Component({
  selector: 'cno-input-field',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-field.html',
  styleUrl: './input-field.scss',
})
export class InputField {
  @Input() type: InputType = 'text';
  @Input() size: InputSize = 'normal';
  @Input() width: InputWidth = 'auto';
  @Input() invalid: boolean = false;
  @Input() disabled: boolean = false;
  @Input() placeholder?: string;
  @Input() id?: string;
  @Input() label?: string;
  @Input() control: FormControl<any> = new FormControl();
}
