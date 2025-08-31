import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  LucideAngularModule,
  CircleAlert,
  TriangleAlert,
  CircleCheck,
  CircleX,
} from 'lucide-angular';

export type AlertType = 'info' | 'danger' | 'warning' | 'success';

@Component({
  selector: 'app-alert',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent implements OnInit {
  @Input() title = '';
  @Input() message? = '';
  @Input() type?: AlertType = 'info';

  readonly AlertCircleIcon = CircleAlert;
  readonly AlertTriangleIcon = TriangleAlert;
  readonly CircleX = CircleX;
  readonly CircleCheck = CircleCheck;

  //to start the exit anim
  exitAnimation: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.exitAnimation = true;
    }, 4700);
  }
}
