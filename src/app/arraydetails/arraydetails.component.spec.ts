import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraydetailsComponent } from './arraydetails.component';

describe('ArraydetailsComponent', () => {
  let component: ArraydetailsComponent;
  let fixture: ComponentFixture<ArraydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArraydetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArraydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
