import { Component, Input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';
import { Button, ButtonColor } from '../button/button';

export interface LayoutButton {
  text: string;
  color: ButtonColor;
  icon?: LucideIconData;
  action?: () => void;
}

@Component({
  selector: 'cno-layout',
  imports: [Button, LucideAngularModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  @Input() title?: string;
  @Input() buttons?: LayoutButton[];
}
