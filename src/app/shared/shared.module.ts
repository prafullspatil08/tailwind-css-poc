import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SidebarMenuComponent } from './side-bar/sidebar-menu/sidebar-menu.component';
import { SidebarSubmenuComponent } from './side-bar/sidebar-submenu/sidebar-submenu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SideBarComponent,
    SidebarMenuComponent,
    SidebarSubmenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [
    SideBarComponent,
    SidebarMenuComponent,
    SidebarSubmenuComponent
  ]
})
export class SharedModule { }
