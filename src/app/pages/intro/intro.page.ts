import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  async login(){
    await this.storage.set('isIntroShowed',true)
    this.router.navigateByUrl('/home')
  }

}
