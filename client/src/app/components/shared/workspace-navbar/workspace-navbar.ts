import { Component, EventEmitter, Output } from '@angular/core';
import { Button } from '../button/button';
import { Menu, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'cno-workspace-navbar',
  imports: [Button, LucideAngularModule],
  templateUrl: './workspace-navbar.html',
  styleUrl: './workspace-navbar.scss',
})
export class WorkspaceNavbar {
  readonly Menu = Menu;

  @Output() toggleSidebar: EventEmitter<void> = new EventEmitter<void>();
}
