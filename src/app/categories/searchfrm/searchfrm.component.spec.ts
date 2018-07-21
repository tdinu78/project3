import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfrmComponent } from './searchfrm.component';

describe('SearchfrmComponent', () => {
  let component: SearchfrmComponent;
  let fixture: ComponentFixture<SearchfrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchfrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchfrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
