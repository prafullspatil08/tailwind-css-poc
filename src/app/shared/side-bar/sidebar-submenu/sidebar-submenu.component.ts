import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SubMenuItem } from 'src/app/core/model/menu.model';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-sidebar-submenu',
  templateUrl: './sidebar-submenu.component.html',
  styleUrls: ['./sidebar-submenu.component.scss']
})
export class SidebarSubmenuComponent {
  @Input() public submenu = <SubMenuItem>{};
  public showSideBar$: Observable<boolean> = new Observable<boolean>();

  constructor(private menuService: MenuService) {
    this.showSideBar$ = this.menuService.showSideBar$;
  }

  ngOnInit(): void {}

  public toggleMenu(menu: any) {
    this.menuService.toggleSubMenu(menu);
  }

  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }
}
