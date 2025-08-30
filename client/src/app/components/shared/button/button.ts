import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule, LoaderCircleIcon } from 'lucide-angular';

export type ButtonColor = 'primary' | 'secondary' | 'white' | 'danger';
export type ButtonSize = 'normal' | 'large';
export type ButtonType = 'submit' | 'button';
export type ButtonWidth = 'full' | 'auto';

@Component({
  selector: 'cno-button',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  readonly LoaderCircleIcon = LoaderCircleIcon;

  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  @Input() color: ButtonColor = 'primary';
  @Input() size: ButtonSize = 'normal';
  @Input() type: ButtonType = 'button';
  @Input() width: ButtonWidth = 'auto';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
}
