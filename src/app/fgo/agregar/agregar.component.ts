import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';
import { FgoService } from '../services/fgo.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{

  @Input() nuevo: Personaje;
  /* @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); */

  constructor(private fgoService: FgoService) {

  }

  agregar = () => {

    if (this.nuevo.nombre.trim().length === 0){
      return;
    }

    /* this.onNuevoPersonaje.emit(this.nuevo); */
    this.fgoService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      rareza: 0
    };

  }
}
