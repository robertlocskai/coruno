import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './components/shared/button/button';
import {
  LucideAngularModule,
  ArrowRight,
  ArrowLeft,
  TrashIcon,
} from 'lucide-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, LucideAngularModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly ArrowRight = ArrowRight;
  readonly ArrowLeft = ArrowLeft;
  readonly TrashIcon = TrashIcon;
  protected title = 'client';

  loading: boolean = false;

  startTimer(): void {
    this.loading = true;
    setInterval(() => {
      this.loading = false;
    }, 2000);
  }
}
