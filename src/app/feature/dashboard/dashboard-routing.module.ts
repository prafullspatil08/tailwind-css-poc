import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MainPageComponent } from './dashboard/main-page/main-page.component';
import { PostComponent } from './dashboard/post/post.component';
import { AddPostComponent } from './dashboard/add-post/add-post.component';
import { ContentLayoutComponent } from './dashboard/content-layout/content-layout.component';
import { PostDetailsComponent } from './dashboard/post-details/post-details.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
    {
      path: '',
      component: MainPageComponent
    },
    {
      path: 'posts',
      component: ContentLayoutComponent,
      children:[
        {
          path: '',
          component: PostComponent
        },
        {
          path: 'new',
          component: AddPostComponent
        },
        {
          path: ':id/post',
          component: PostDetailsComponent
        }
      ]
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
