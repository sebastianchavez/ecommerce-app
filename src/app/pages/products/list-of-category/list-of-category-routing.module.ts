import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfCategoryPage } from './list-of-category.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfCategoryPageRoutingModule {}
