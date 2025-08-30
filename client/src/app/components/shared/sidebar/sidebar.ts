import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  Bug,
  FileSpreadsheet,
  Gauge,
  Handshake,
  LucideAngularModule,
  LucideIconData,
  PencilRuler,
  Plus,
  Route,
  Settings,
  Users,
  ChevronDown,
  Folder,
} from 'lucide-angular';

export interface SidebarOption {
  label: string;
  icon: LucideIconData;
  children?: SidebarOption[];
  isOpen?: boolean;
  action?: () => void;
}

@Component({
  selector: 'cno-sidebar',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  readonly ChevronDown = ChevronDown;

  @Input() sidebarOpen: boolean = true;

  readonly options: SidebarOption[] = [
    {
      label: 'Dashboard',
      icon: Gauge,
      action: () => {
        console.log('Add new');
      },
    },
    {
      label: 'Projects',
      icon: PencilRuler,
      isOpen: false,
      children: [
        {
          label: 'Add new',
          icon: Plus,
          action: () => {
            console.log('Add new');
          },
        },
        {
          label: 'Add new',
          icon: Plus,
          action: () => {
            console.log('Add new');
          },
        },
      ],
    },
    {
      label: 'Issues',
      icon: Bug,
    },
    {
      label: 'Clients',
      icon: Handshake,
    },
    {
      label: 'Employees',
      icon: Users,
    },
    {
      label: 'Planner',
      icon: Route,
    },
    {
      label: 'Forms',
      icon: FileSpreadsheet,
    },
    {
      label: 'Documents',
      icon: Folder,
    },
    {
      label: 'Settings',
      icon: Settings,
    },
  ];

  toggleOption(option: SidebarOption): void {
    if (option.children && option.children.length > 0) {
      option.isOpen = !option.isOpen;
    }
  }
}
