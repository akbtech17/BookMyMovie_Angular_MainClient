import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddmovieComponent } from './admin-addmovie.component';

describe('AdminAddmovieComponent', () => {
  let component: AdminAddmovieComponent;
  let fixture: ComponentFixture<AdminAddmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddmovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
