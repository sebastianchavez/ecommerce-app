import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.page.html',
  styleUrls: ['./view-product.page.scss'],
})
export class ViewProductPage implements OnInit {

  product: any = {}

  constructor(private route: ActivatedRoute, private navCtrl: NavController) { 
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.product = JSON.parse(params["params"]);
  });
  }

  ngOnInit() {
  }
  
  goBack(){
    this.navCtrl.pop()
  }

}
