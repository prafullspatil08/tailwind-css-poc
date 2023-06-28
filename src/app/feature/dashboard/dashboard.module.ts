import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarMenuComponent } from './side-bar/side-bar-menu/side-bar-menu.component';
import { SideBarSubmenuComponent } from './side-bar/side-bar-submenu/side-bar-submenu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarMenuComponent } from './navbar/navbar-menu/navbar-menu.component';
import { NavbarMobileComponent } from './navbar/navbar-mobile/navbar-mobile.component';
import { NavbarSubmenuComponent } from './navbar/navbar-submenu/navbar-submenu.component';
import { ProfileMenuComponent } from './navbar/profile-menu/profile-menu.component';
import { NavbarMobileMenuComponent } from './navbar/navbar-mobile/navbar-mobile-menu/navbar-mobile-menu.component';
import { NavbarMobileSubmenuComponent } from './navbar/navbar-mobile/navbar-mobile-submenu/navbar-mobile-submenu.component';
import { MainPageComponent } from './dashboard/main-page/main-page.component';
import { PostComponent } from './dashboard/post/post.component';
import { AddPostComponent } from './dashboard/add-post/add-post.component';
import { PostDetailsComponent } from './dashboard/post-details/post-details.component';
import { ContentLayoutComponent } from './dashboard/content-layout/content-layout.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SideBarComponent,
    SideBarMenuComponent,
    SideBarSubmenuComponent,
    NavbarComponent,
    NavbarMenuComponent,
    NavbarMobileComponent,
    NavbarSubmenuComponent,
    ProfileMenuComponent,
    NavbarMobileMenuComponent,
    NavbarMobileSubmenuComponent,
    MainPageComponent,
    PostComponent,
    AddPostComponent,
    PostDetailsComponent,
    ContentLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ]
})
export class SharedModule { }
