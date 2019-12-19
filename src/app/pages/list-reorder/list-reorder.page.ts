import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Aquaman', 'Batman', 'Wonder Woman', 'Sabios de Java', 'Flash', 'Arriba España', 'F.Franco', 'M.Rajoy'];

  constructor() { }

  ngOnInit() {
  }

  reorder( event ) {
    console.log(event);
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);
    event.detail.complete();
  }
}
