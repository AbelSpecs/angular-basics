import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';
import { FgoService } from '../services/fgo.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  nuevo: Personaje = {
    nombre: '',
    rareza: 0,
  };

  constructor() {
  }


}
