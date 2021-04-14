import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeD: string;
  visible: boolean = false;


  borrarHeroe = () => {
    this.visible = true;
    this.heroeD = this.heroes[1] || 'No hay mas heroes que borrar';
    this.heroes.splice(1, 1);
  }
}
