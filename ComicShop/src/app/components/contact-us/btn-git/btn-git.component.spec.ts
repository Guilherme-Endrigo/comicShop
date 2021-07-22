import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGitComponent } from './btn-git.component';

describe('BtnGitComponent', () => {
  let component: BtnGitComponent;
  let fixture: ComponentFixture<BtnGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnGitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
