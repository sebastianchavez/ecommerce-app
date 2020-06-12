import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {

  product: any = {}

  constructor(private route: ActivatedRoute, private navCtrl:NavController) { 
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
