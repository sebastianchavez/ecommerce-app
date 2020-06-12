import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BranchOfficePage } from './branch-office.page';

describe('BranchOfficePage', () => {
  let component: BranchOfficePage;
  let fixture: ComponentFixture<BranchOfficePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchOfficePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BranchOfficePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
