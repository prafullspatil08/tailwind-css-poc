import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit  {
  isLoggedIn:boolean = false;
  constructor(private menuService: MenuService, private api: ApiService) {}

  ngOnInit(): void {
    this.api.isLoggedIn.subscribe((res)=> {
      this.isLoggedIn = res;
    })
  }

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = true;
  }
}
