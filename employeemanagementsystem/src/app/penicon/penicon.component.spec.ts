import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeniconComponent } from './penicon.component';

describe('PeniconComponent', () => {
  let component: PeniconComponent;
  let fixture: ComponentFixture<PeniconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeniconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeniconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
