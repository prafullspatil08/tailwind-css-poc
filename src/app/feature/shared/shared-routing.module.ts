import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponent } from './shared.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: SharedComponent,
    loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
