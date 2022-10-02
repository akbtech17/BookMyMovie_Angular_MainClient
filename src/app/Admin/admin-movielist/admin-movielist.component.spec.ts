import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMovielistComponent } from './admin-movielist.component';

describe('AdminMovielistComponent', () => {
  let component: AdminMovielistComponent;
  let fixture: ComponentFixture<AdminMovielistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMovielistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMovielistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
