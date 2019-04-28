import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsByCinemaComponent } from './sessions-by-cinema.component';

describe('SessionsByCinemaComponent', () => {
  let component: SessionsByCinemaComponent;
  let fixture: ComponentFixture<SessionsByCinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionsByCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsByCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
