import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrecTableComponent } from './userrec-table.component';

describe('UserrecTableComponent', () => {
  let component: UserrecTableComponent;
  let fixture: ComponentFixture<UserrecTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserrecTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserrecTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
