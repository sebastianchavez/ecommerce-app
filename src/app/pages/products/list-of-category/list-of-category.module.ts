import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOfCategoryPageRoutingModule } from './list-of-category-routing.module';

import { ListOfCategoryPage } from './list-of-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOfCategoryPageRoutingModule
  ],
  declarations: [ListOfCategoryPage]
})
export class ListOfCategoryPageModule {}
