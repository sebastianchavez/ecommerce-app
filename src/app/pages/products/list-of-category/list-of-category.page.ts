import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-list-of-category',
  templateUrl: './list-of-category.page.html',
  styleUrls: ['./list-of-category.page.scss'],
})
export class ListOfCategoryPage implements OnInit {

  activeEffect:Boolean = false;

  constructor(private router:Router, private loadingController:LoadingController) { }

  ngOnInit() {
    this.presentLoading();
  }

  goToCategory(cat){
    this.router.navigate([`/category/${cat}`])
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cagando...',
    });
    await loading.present();

    setTimeout(() => {
      loading.dismiss()
      this.activeEffect = true;
    },500)
  }

}
