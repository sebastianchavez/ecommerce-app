import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  category:any = {}

  activeEffect:Boolean = false;

  fruits:Array<any> = [
    {
      title: 'Producto 1',
      subtitle:'10% descuento',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      price: '2000',
      img: 'assets/imgs/fruits/01.jpg'
    },
    {
      title: 'Producto 2',
      subtitle:'20% descuento',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      price: '4000',
      img: 'assets/imgs/fruits/02.jpg'
    },
    {
      title: 'Producto 3',
      subtitle:'30% descuento',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      price: '6000',
      img: 'assets/imgs/fruits/03.jpg'
    },
    {
      title: 'Producto 4',
      subtitle:'40% descuento',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      price: '8000',
      img: 'assets/imgs/fruits/04.jpg'
    },
    {
      title: 'Producto 5',
      subtitle:'10% descuento',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      price: '2000',
      img: 'assets/imgs/fruits/05.jpg'
    },
    {
      title: 'Producto 6',
      subtitle:'20% descuento',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      price: '4000',
      img: 'assets/imgs/fruits/06.jpg'
    },
    {
      title: 'Producto 7',
      subtitle:'30% descuento',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      price: '6000',
      img: 'assets/imgs/fruits/07.jpg'
    },
    {
      title: 'Producto 8',
      subtitle:'40% descuento',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      price: '8000',
      img: 'assets/imgs/fruits/08.jpg'
    }
  ];

  clothes:Array<any> = [
    {
      title: 'Producto 1',
      subtitle:'10% descuento',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      price: '2000',
      img: 'assets/imgs/clothes/01.jpg'
    },
    {
      title: 'Producto 2',
      subtitle:'20% descuento',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      price: '4000',
      img: 'assets/imgs/clothes/02.jpg'
    },
    {
      title: 'Producto 3',
      subtitle:'30% descuento',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      price: '6000',
      img: 'assets/imgs/clothes/03.jpg'
    },
    {
      title: 'Producto 4',
      subtitle:'40% descuento',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      price: '8000',
      img: 'assets/imgs/clothes/04.jpg'
    },
    {
      title: 'Producto 5',
      subtitle:'10% descuento',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      price: '2000',
      img: 'assets/imgs/clothes/05.jpg'
    },
    {
      title: 'Producto 6',
      subtitle:'20% descuento',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      price: '4000',
      img: 'assets/imgs/clothes/06.jpg'
    },
    {
      title: 'Producto 7',
      subtitle:'30% descuento',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      price: '6000',
      img: 'assets/imgs/clothes/07.jpg'
    },
    {
      title: 'Producto 8',
      subtitle:'40% descuento',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas omnis, dolor delectus maxime id, quae odio sint, ipsum voluptatibus dignissimos sed nobis exercitationem. Totam ducimus minima rem explicabo ad modi.',
      price: '8000',
      img: 'assets/imgs/clothes/08.jpg'
    }
  ];
  

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private loadingController:LoadingController) { 
    let id = this.route.snapshot.paramMap.get('id');
    console.log(this.category.id)
    switch (id) {
      case '1':
        this.category.title = 'Frutas';
        this.category.products = this.fruits;
        break;
      case '2':
        this.category.title = 'Ropa'
        this.category.products = this.clothes;
        break;    
      default:
        break;
    }
  }

  ngOnInit() {
    this.presentLoading();
  }

  openProduct(prod){
    this.navCtrl.navigateForward('/product', { queryParams:{ params: JSON.stringify(prod)} })
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
