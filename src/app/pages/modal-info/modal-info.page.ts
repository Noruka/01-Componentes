import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {


  @Input() nombre;
  @Input() pais;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salirSinArgs() {
    this.modalCtrl.dismiss(); /*Salir sin argumentos*/
  }

  salirConArgs() {
    this.modalCtrl.dismiss({
    nombre: 'Felipe',
    pais: 'Francia'
        });
  }

}
