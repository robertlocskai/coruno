import { Component, inject } from '@angular/core';
import { InputField } from '../../../components/shared/input-field/input-field';
import { Button } from '../../../components/shared/button/button';
import { EyeIcon, EyeClosedIcon, LucideAngularModule } from 'lucide-angular';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'cno-login',
  imports: [InputField, Button, LucideAngularModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  readonly EyeIcon = EyeIcon;
  readonly EyeClosedIcon = EyeClosedIcon;

  passwordVisible: boolean = false;
  loading: boolean = false;

  form = this.fb.group({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.email, Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  login(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.router.navigate(['app/dashboard']);
    }
  }
}
