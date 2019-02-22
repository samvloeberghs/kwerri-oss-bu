import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterCardValidatorComponent } from './twitter-card-validator.component';

describe('TwitterCardValidatorComponent', () => {
  let component: TwitterCardValidatorComponent;
  let fixture: ComponentFixture<TwitterCardValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterCardValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterCardValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
