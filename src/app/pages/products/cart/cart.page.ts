import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  activeEffect:Boolean = false;

  products:Array<any> = [
    {
      title:'Producto 1',
      img:'assets/imgs/fruits/03.jpg',
      state:'En camino',
      quantity:2,
      description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      unitPrice: 2000,
      totalPrice: 4000
    },
    {
      title:'Producto 2',
      img:'assets/imgs/fruits/04.jpg',
      state:'Preparando',
      quantity:4,
      description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      unitPrice: 4000,
      totalPrice: 16000
    }
  ]

  constructor(public alertController: AlertController, private navCtrl:NavController, private loadingController:LoadingController) { }

  ngOnInit() {
    this.presentLoading();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar!',
      message: 'Desea eliminar este producto?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelado');
          }
        }, {
          text: 'Si',
          handler: () => {
            console.log('Si')
          }
        }
      ]
    });

    await alert.present();
  }

  goToProduc(prod){
    this.navCtrl.navigateForward('/edit-product', { queryParams:{ params: JSON.stringify(prod)} })
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
