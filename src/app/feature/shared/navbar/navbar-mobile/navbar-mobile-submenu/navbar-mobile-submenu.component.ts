import { Component, Input } from '@angular/core';
import { SubMenuItem } from 'src/app/core/model/menu.model';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-navbar-mobile-submenu',
  templateUrl: './navbar-mobile-submenu.component.html',
  styleUrls: ['./navbar-mobile-submenu.component.scss']
})
export class NavbarMobileSubmenuComponent {
  @Input() public submenu = <SubMenuItem>{};

  constructor(private menuService: MenuService) {}
  
  public toggleMenu(menu: any) {
    this.menuService.toggleSubMenu(menu);
  }

  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }

  public closeMobileMenu() {
    this.menuService.showMobileMenu = false;
  }
}
