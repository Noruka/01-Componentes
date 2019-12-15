import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor(private alertCtrl: AlertController) { }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Cancelar');
        } } , {
        text: 'Ok',
        handler: (blah) => {
          console.log('Botón OK');
        } } ] } );
    await alert.present();
  }

  async presentNombre() {
    const alert = await this.alertCtrl.create({
      header: 'Input',
      subHeader: 'Inserte el nombre',
      inputs: [ {
        name: 'name',
        type: 'text',
        placeholder: 'Placeholder'
      } ],
      buttons: [ {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Confirm Cancel');
        } }, {
        text: 'Ok',
        handler: ( data ) => {
          console.log('Confirm Ok', data );
          this.titulo = data.name;
        } } ] } );
    await alert.present();
  }

  ngOnInit() {
  }

}
