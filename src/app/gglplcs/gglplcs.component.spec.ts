import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GglplcsComponent } from './gglplcs.component';

describe('GglplcsComponent', () => {
  let component: GglplcsComponent;
  let fixture: ComponentFixture<GglplcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GglplcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GglplcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
