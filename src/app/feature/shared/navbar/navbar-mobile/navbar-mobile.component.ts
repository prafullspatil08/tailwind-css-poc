import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent {
  public showMobileMenu$: Observable<boolean> = new Observable<boolean>();

  constructor(private menuService: MenuService) {
    this.showMobileMenu$ = this.menuService.showMobileMenu$;
  }

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = false;
  }
}
