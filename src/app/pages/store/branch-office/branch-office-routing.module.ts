import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BranchOfficePage } from './branch-office.page';

const routes: Routes = [
  {
    path: '',
    component: BranchOfficePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BranchOfficePageRoutingModule {}
