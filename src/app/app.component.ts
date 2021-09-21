import { Component } from '@angular/core';
import { Tarea } from './tarea.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrTareas: Tarea[];

  constructor() {
    this.arrTareas = new Array();
  }

  onTareaCreada($event) {
    this.arrTareas.push($event);
    console.log(this.arrTareas);
  }

}
