import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigMainComponent } from './big-main.component';

describe('BigMainComponent', () => {
  let component: BigMainComponent;
  let fixture: ComponentFixture<BigMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
