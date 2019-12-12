import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  usuario = {
    email: '',
    password: ''
  };

  nombre: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplate() {
    console.log('Form Submit', this.nombre, this.usuario);
  }

}
