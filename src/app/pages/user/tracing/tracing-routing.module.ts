import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TracingPage } from './tracing.page';

const routes: Routes = [
  {
    path: '',
    component: TracingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TracingPageRoutingModule {}
