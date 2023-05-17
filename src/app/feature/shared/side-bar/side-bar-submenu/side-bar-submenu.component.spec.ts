import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarSubmenuComponent } from './side-bar-submenu.component';

describe('SideBarSubmenuComponent', () => {
  let component: SideBarSubmenuComponent;
  let fixture: ComponentFixture<SideBarSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarSubmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
