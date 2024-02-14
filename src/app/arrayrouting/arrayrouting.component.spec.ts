import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayroutingComponent } from './arrayrouting.component';

describe('ArrayroutingComponent', () => {
  let component: ArrayroutingComponent;
  let fixture: ComponentFixture<ArrayroutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayroutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
