import { Component } from '@angular/core';
import { Sidebar } from '../../../components/shared/sidebar/sidebar';
import { Container } from '../../../components/shared/container/container';
import { RouterOutlet } from '@angular/router';
import { WorkspaceNavbar } from '../../../components/shared/workspace-navbar/workspace-navbar';
import { Alert } from '../../../core/services/alert-service/Alert';

@Component({
  selector: 'cno-workspace',
  imports: [Container, Sidebar, RouterOutlet, WorkspaceNavbar],
  templateUrl: './workspace.html',
  styleUrl: './workspace.scss',
})
export class Workspace {
  sidebarOpen: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      Alert.fire({
        title:
          'Warning! This page is just a DEMO with no working functionalities!',
        type: 'info',
      });
    }, 400);

    setTimeout(() => {
      Alert.fire({
        title:
          'Warning! This page is just a DEMO with no working functionalities!',
        type: 'warning',
      });
    }, 5000);

    setTimeout(() => {
      Alert.fire({
        title:
          'Warning! This page is just a DEMO with no working functionalities!',
        type: 'danger',
      });
    }, 10000);

    setTimeout(() => {
      Alert.fire({
        title:
          'Warning! This page is just a DEMO with no working functionalities!',
        type: 'success',
      });
    }, 15000);
  }
}
