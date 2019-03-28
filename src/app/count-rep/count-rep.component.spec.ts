import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountRepComponent } from './count-rep.component';

describe('CountRepComponent', () => {
  let component: CountRepComponent;
  let fixture: ComponentFixture<CountRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
