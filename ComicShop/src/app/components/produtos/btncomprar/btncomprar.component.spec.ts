import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtncomprarComponent } from './btncomprar.component';

describe('BtncomprarComponent', () => {
  let component: BtncomprarComponent;
  let fixture: ComponentFixture<BtncomprarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtncomprarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtncomprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
