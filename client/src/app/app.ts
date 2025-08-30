import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './components/shared/button/button';
import {
  LucideAngularModule,
  ArrowRight,
  ArrowLeft,
  TrashIcon,
  EyeIcon,
  EyeClosedIcon,
  SearchIcon,
} from 'lucide-angular';
import { InputField } from './components/shared/input-field/input-field';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, LucideAngularModule, InputField],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly ArrowRight = ArrowRight;
  readonly ArrowLeft = ArrowLeft;
  readonly TrashIcon = TrashIcon;
  readonly EyeIcon = EyeIcon;
  readonly EyeClosedIcon = EyeClosedIcon;
  readonly SearchIcon = SearchIcon;
  protected title = 'client';

  loading: boolean = false;

  visible: boolean = false;

  startTimer(): void {
    this.loading = true;
    setInterval(() => {
      this.loading = false;
    }, 2000);
  }
}
