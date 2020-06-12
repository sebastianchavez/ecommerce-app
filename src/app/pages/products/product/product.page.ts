import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

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
