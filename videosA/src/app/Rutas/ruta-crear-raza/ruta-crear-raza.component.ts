import {Component, OnInit} from '@angular/core';
import {RazaRestService} from '../../servicios/rest/raza-rest.service';
import {Raza} from '../../interfaces/raza';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-ruta-crear-raza',
  templateUrl: './ruta-crear-raza.component.html',
  styleUrls: ['./ruta-crear-raza.component.scss']
})
export class RutaCrearRazaComponent implements OnInit {

  raza: RazaEjemplo = {
    nombre: '123123123123',
    apellido: ''
  };

  constructor(private readonly _razaRestService: RazaRestService) {
  }

  ngOnInit() {
  }

  crearRaza(razaObjeto) {

    // if (this.nombreContieneA(razaObjeto.nombre.toString())) {
    const crearRaza$ = this._razaRestService
      .create(
        razaObjeto.nombre,
        razaObjeto.username,
        razaObjeto.password
      );

    crearRaza$
      .subscribe(
        (raza: Raza) => {
          console.log('Raza');
          alert(`Raza creada: ${raza.nombre}`);
        },
        (error) => {
          console.error('Error: ', error);
        }
      );

    // } else {
    //   alert('ERROR, No contiene una letra A');
    // }
  }

  nombreContieneA(nombre: string): boolean {
    return nombre.toLowerCase().includes('a');
  }


  mostrarEnConsola(objeto) {
    console.log(objeto);
    console.log(objeto.value);
  }

}


interface RazaEjemplo {
  nombre: string | number;
  apellido: string;
}









