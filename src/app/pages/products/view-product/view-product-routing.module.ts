import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewProductPage } from './view-product.page';

const routes: Routes = [
  {
    path: '',
    component: ViewProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewProductPageRoutingModule {}
