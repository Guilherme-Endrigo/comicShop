import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHQComponent } from './card-hq.component';

describe('CardHQComponent', () => {
  let component: CardHQComponent;
  let fixture: ComponentFixture<CardHQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
