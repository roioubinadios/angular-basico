import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Machete','Spiderman','Ironman','Hulk','Thor','Goku','Tanjiro','Inosuke','Zenitsu','Luffy'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
