import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemExtraComponent } from './nav-item-extra.component';

describe('NavItemExtraComponent', () => {
  let component: NavItemExtraComponent;
  let fixture: ComponentFixture<NavItemExtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavItemExtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
