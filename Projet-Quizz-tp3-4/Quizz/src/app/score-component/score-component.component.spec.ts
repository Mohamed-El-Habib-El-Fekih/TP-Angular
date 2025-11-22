import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreComponentComponent } from './score-component.component';

describe('ScoreComponentComponent', () => {
  let component: ScoreComponentComponent;
  let fixture: ComponentFixture<ScoreComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreComponentComponent]
    });
    fixture = TestBed.createComponent(ScoreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
