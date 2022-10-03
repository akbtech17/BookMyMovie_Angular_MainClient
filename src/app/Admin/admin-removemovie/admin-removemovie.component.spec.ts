import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRemovemovieComponent } from './admin-removemovie.component';

describe('AdminRemovemovieComponent', () => {
  let component: AdminRemovemovieComponent;
  let fixture: ComponentFixture<AdminRemovemovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRemovemovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRemovemovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
