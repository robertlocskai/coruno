import { Routes } from '@angular/router';
import { Login } from './features/views/login/login';
import { Workspace } from './features/views/workspace/workspace';
import { Dashboard } from './features/views/workspace/sub-views/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: Login },
  {
    path: 'app/dashboard',
    component: Workspace,
    children: [{ path: '', component: Dashboard }],
  },
];
