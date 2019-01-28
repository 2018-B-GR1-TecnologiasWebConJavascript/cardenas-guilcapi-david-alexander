import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.scss']
})
export class RutaInicioComponent implements OnInit {

  imagenes: Imagenes[] = [
    {
      anio: 2018,
      nombreImagen: '01.jpeg',
      nombrePelicula: 'Avengers'
    },
    {
      anio: 2016,
      nombreImagen: '02.jpeg',
      nombrePelicula: 'Infantil'
    },
    {
      anio: 2008,
      nombreImagen: '03.jpeg',
      nombrePelicula: 'Antigua'
    },
    {
      anio: 2001,
      nombreImagen: '04.jpeg',
      nombrePelicula: 'Toy Story'
    },
];
  constructor() {
  }
  ngOnInit() {
  }

  agregarCarrito(pelicula){
    console.log('Agregando a carrito', pelicula);
  }
}

export interface Imagenes {
  nombreImagen: string;
  nombrePelicula: string;
  anio: number;
}







