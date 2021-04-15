import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';
import { FgoService } from '../services/fgo.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{

  /* @Input() personajes: Personaje[] = []; */

  get personajes() {
    return this.fgoService.personajes;
  }

  constructor(private fgoService: FgoService){

  }
}
