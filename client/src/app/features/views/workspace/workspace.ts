import { Component } from '@angular/core';
import { Sidebar } from '../../../components/shared/sidebar/sidebar';
import { Container } from '../../../components/shared/container/container';
import { RouterOutlet } from '@angular/router';
import { WorkspaceNavbar } from '../../../components/shared/workspace-navbar/workspace-navbar';

@Component({
  selector: 'cno-workspace',
  imports: [Container, Sidebar, RouterOutlet, WorkspaceNavbar],
  templateUrl: './workspace.html',
  styleUrl: './workspace.scss',
})
export class Workspace {
  sidebarOpen: boolean = true;
}
