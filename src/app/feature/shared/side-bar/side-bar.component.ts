import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/core/model/menu.model';
import packageJson from '../../../../../package.json';
import { ThemeService } from 'src/app/core/services/theme.service';
import { MenuService } from 'src/app/core/services/menu.service';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  public showSideBar$: Observable<boolean> = new Observable<boolean>();
  public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();
  public appJson: any = packageJson;

  constructor(public themeService: ThemeService, private menuService: MenuService) {
    this.showSideBar$ = this.menuService.showSideBar$;
    this.pagesMenu$ = this.menuService.pagesMenu$;
  }

  ngOnInit(): void {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }

  toggleTheme() {
    this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
  }
}
