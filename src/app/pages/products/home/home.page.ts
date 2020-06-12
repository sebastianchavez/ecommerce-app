import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  activeEffect:Boolean = false;

  products:Array<any> = [
    {
      title: 'Producto 1',
      subtitle:'10% descuento',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      price: '2000',
      img: 'assets/imgs/home_slide_1.jpg'
    },
    {
      title: 'Producto 2',
      subtitle:'20% descuento',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      price: '4000',
      img: 'assets/imgs/home_slide_2.jpg'
    },
    {
      title: 'Producto 3',
      subtitle:'30% descuento',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      price: '6000',
      img: 'assets/imgs/home_slide_3.jpg'
    },
    {
      title: 'Producto 4',
      subtitle:'40% descuento',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      price: '8000',
      img: 'assets/imgs/home_slide_4.jpg'
    }
  ];

  constructor(private navCtrl: NavController, public loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
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

  openProduct(prod){
    this.navCtrl.navigateForward('/product', { queryParams:{ params: JSON.stringify(prod)} })
  }

}
