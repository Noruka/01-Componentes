import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;



  data: any[] = Array(20);


  constructor() { }

  ngOnInit() {
  }

  cargarData( evento ) {

    console.log(evento);

    setTimeout(() => {
      if (this.data.length > 50) {
        evento.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      } const nuevoArray = Array(20); this.data.push(...nuevoArray); evento.target.complete(); }, 500);

  }

}
