import { Component } from '@angular/core';
import { InputField } from '../../../components/shared/input-field/input-field';
import { Button } from '../../../components/shared/button/button';
import { EyeIcon, EyeClosedIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'cno-login',
  imports: [InputField, Button, LucideAngularModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  readonly EyeIcon = EyeIcon;
  readonly EyeClosedIcon = EyeClosedIcon;

  passwordVisible: boolean = false;
}
