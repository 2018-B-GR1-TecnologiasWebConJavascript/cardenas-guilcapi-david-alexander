import {Component, OnInit} from '@angular/core';
import {UsuarioServiceService} from '../../servicios/usuario-service.service';
import {RazaRestService} from '../../servicios/rest/raza-rest.service';
import {Raza} from '../../interfaces/raza';

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {

  usuarios = [];

  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF6384'
        ],
        borderColor: '#FF6384',
      },
      {
        label: 'Second Dataset',
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF6384'
        ],
        borderColor: '#FFCE56',
      }
    ]
  };

  columnas = [
    {field: 'id', header: 'Identificador'},
    {field: 'nombre', header: 'Nombre'},
    {field: 'username', header: 'Username'},
    {field: 'password', header: 'Contrasenia'},
    {field: 'id', header: 'Acciones'},
  ];

  // Inyeccion de Dependencias
  constructor(
    private readonly _razaRestService: RazaRestService
  ) {

  }

  ngOnInit() {
    // CUANDO ESTA LISTO EL WEB COMPONENT PARA MOSTRARSE
    const razas$ = this._razaRestService.findAll();

    razas$
      .subscribe(
        (razas: Raza[]) => {
          console.log(razas);
          this.usuarios = razas;
        },
        (error) => {
          console.error('Error', error);
        }
      );
  }


  eliminar(raza: Raza) {

    const razaEliminada$ = this._razaRestService.delete(raza.id);

    razaEliminada$
      .subscribe(
        (razaEliminada: Raza) => {
          console.log('Se elimino:', razaEliminada);

          const indice = this.usuarios
            .findIndex((r) => r.id === raza.id);

          this.usuarios.splice(indice, 1);


        },
        (error) => {
          console.error('Error', error);
        }
      );


  }

}



