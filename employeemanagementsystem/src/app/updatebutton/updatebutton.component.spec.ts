import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateButtonComponent } from './updatebutton.component';

describe('UpdateButtonComponent', () => {
  let component: UpdateButtonComponent;
  let fixture: ComponentFixture<UpdateButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
