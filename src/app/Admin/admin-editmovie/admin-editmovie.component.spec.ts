import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditmovieComponent } from './admin-editmovie.component';

describe('AdminEditmovieComponent', () => {
  let component: AdminEditmovieComponent;
  let fixture: ComponentFixture<AdminEditmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditmovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
