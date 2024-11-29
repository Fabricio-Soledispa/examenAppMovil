import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   nombre: string = '';
  edad: number | null = null;
  mensaje: { titulo: string; texto: string } | null = null;

  verificarEdad() {
    if (this.edad === null || this.edad < 0) {
      this.mensaje = { titulo: 'Error', texto: 'Por favor ingresa una edad válida.' };
      return;
    }

    if (this.edad < 18) {
      this.mensaje = { titulo: 'Resultado', texto: `${this.nombre}, eres menor de edad.` };
    } else {
      this.mensaje = { titulo: 'Resultado', texto: `${this.nombre}, eres mayor de edad.` };
    }
  }

}
