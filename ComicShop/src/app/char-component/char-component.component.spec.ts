import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharComponentComponent } from './char-component.component';

describe('CharComponentComponent', () => {
  let component: CharComponentComponent;
  let fixture: ComponentFixture<CharComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
