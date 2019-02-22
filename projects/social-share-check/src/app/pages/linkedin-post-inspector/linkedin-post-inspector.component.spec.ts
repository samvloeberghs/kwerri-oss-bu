import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinPostInspectorComponent } from './linkedin-post-inspector.component';

describe('LinkedinPostInspectorComponent', () => {
  let component: LinkedinPostInspectorComponent;
  let fixture: ComponentFixture<LinkedinPostInspectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedinPostInspectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinPostInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
