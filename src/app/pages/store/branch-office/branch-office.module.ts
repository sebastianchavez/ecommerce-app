import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BranchOfficePageRoutingModule } from './branch-office-routing.module';

import { BranchOfficePage } from './branch-office.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BranchOfficePageRoutingModule
  ],
  declarations: [BranchOfficePage]
})
export class BranchOfficePageModule {}
