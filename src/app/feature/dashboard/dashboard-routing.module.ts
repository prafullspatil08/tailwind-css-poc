import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MainPageComponent } from './dashboard/main-page/main-page.component';
import { PostComponent } from './dashboard/post/post.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: '',
      component: MainPageComponent
    },
    {
      path: 'post',
      component: PostComponent
    },
  ]
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
