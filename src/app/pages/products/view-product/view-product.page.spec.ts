import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewProductPage } from './view-product.page';

describe('ViewProductPage', () => {
  let component: ViewProductPage;
  let fixture: ComponentFixture<ViewProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
