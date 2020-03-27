import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialsComponent } from './initials.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EventsFilterPipe } from 'src/app/pipes/events-filter/events-filter.pipe';
import { SwitcherComponent } from './switcher/switcher.component';

describe('InitialsComponent', () => {
  let component: InitialsComponent;
  let fixture: ComponentFixture<InitialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialsComponent, EventsFilterPipe, SwitcherComponent ],
      imports: [
        SharedModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
