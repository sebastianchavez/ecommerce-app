import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TracingPage } from './tracing.page';

describe('TracingPage', () => {
  let component: TracingPage;
  let fixture: ComponentFixture<TracingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TracingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
