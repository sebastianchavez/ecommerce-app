import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyShoppingPage } from './my-shopping.page';

describe('MyShoppingPage', () => {
  let component: MyShoppingPage;
  let fixture: ComponentFixture<MyShoppingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyShoppingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyShoppingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
