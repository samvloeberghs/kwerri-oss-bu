import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookSharingDebuggerComponent } from './facebook-sharing-debugger.component';

describe('FacebookSharingDebuggerComponent', () => {
  let component: FacebookSharingDebuggerComponent;
  let fixture: ComponentFixture<FacebookSharingDebuggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookSharingDebuggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookSharingDebuggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
