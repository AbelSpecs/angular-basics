import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/personajes.interface";

@Injectable()
export class FgoService{

  private _personajes: Personaje[] = [
    {
      nombre: 'Saber',
      rareza: 5
    },
    {
      nombre: 'Jeanne Alter',
      rareza: 5
    },
    {
      nombre: 'Ereshkigal',
      rareza: 5
    },

];

  get personajes() {
    return [...this._personajes];
  }

  constructor(){}

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }

}
