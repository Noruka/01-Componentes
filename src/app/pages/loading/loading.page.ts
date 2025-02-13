import { Component, OnInit } from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;
  constructor(private LoadingCtrl: LoadingController) { }

  ngOnInit() {
    this.presentLoading('Espere');
    setTimeout(() => {
      this.loading.dismiss();
    }, 1500);
  }

  async presentLoading( mensaje: string) {
    this.loading = await this.LoadingCtrl.create({ message: 'Cargando viaje con pipo', duration: 2000});
    return this.loading.present();
  }

}
