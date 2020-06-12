import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyShoppingPageRoutingModule } from './my-shopping-routing.module';

import { MyShoppingPage } from './my-shopping.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyShoppingPageRoutingModule
  ],
  declarations: [MyShoppingPage]
})
export class MyShoppingPageModule {}
