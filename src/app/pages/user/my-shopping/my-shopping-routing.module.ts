import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyShoppingPage } from './my-shopping.page';

const routes: Routes = [
  {
    path: '',
    component: MyShoppingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyShoppingPageRoutingModule {}
