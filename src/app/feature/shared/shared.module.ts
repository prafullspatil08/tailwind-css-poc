import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarMenuComponent } from './side-bar/side-bar-menu/side-bar-menu.component';
import { SideBarSubmenuComponent } from './side-bar/side-bar-submenu/side-bar-submenu.component';


@NgModule({
  declarations: [
    SharedComponent,
    SideBarComponent,
    SideBarMenuComponent,
    SideBarSubmenuComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
