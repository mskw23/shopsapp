import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerButtonComponent } from './owner-button.component';

describe('OwnerButtonComponent', () => {
  let component: OwnerButtonComponent;
  let fixture: ComponentFixture<OwnerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
