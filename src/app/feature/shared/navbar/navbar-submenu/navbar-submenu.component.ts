import { Component, Input } from '@angular/core';
import { SubMenuItem } from 'src/app/core/model/menu.model';

@Component({
  selector: 'div[navbar-submenu]',
  templateUrl: './navbar-submenu.component.html',
  styleUrls: ['./navbar-submenu.component.scss']
})
export class NavbarSubmenuComponent {
  @Input() public submenu = <SubMenuItem[]>{};
}
