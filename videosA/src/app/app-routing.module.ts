import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RutaInicioComponent} from './rutas/ruta-inicio/ruta-inicio.component';
import {RutaMenuComponent} from './rutas/ruta-menu/ruta-menu.component';
import {RutaLoginComponent} from './rutas/ruta-login/ruta-login.component';
import {RutaPerfilComponent} from './rutas/ruta-perfil/ruta-perfil.component';
import {Ruta404Component} from './rutas/ruta404/ruta404.component';
import {RutaGestionUsuariosComponent} from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import {RutaGestionProductosComponent} from './rutas/ruta-gestion-productos/ruta-gestion-productos.component';
import {RutaVerDetalleUsuarioComponent} from './rutas/ruta-ver-detalle-usuario/ruta-ver-detalle-usuario.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    // NOMBRE
    path: 'inicio',
    component: RutaInicioComponent
    // COMPONENTE
  },
  {
    path: 'menu',
    component: RutaMenuComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'gestion-productos'
      },
      {
        // menu/gestion-usuarios
        path: 'gestion-usuarios',
        component: RutaGestionUsuariosComponent,
      },
      {
        // menu/gestion-productos
        path: 'gestion-productos',
        component: RutaGestionProductosComponent
      },
      {
        path: 'ver-usuario/:idUsuario', // /menu/ver-usuario
        component: RutaVerDetalleUsuarioComponent
      }
    ]
  },
  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: 'perfil',
    component: RutaPerfilComponent
  },
  {
    path: 'no-encontrado',
    component: Ruta404Component
  },
  {
    path: '**',
    redirectTo: 'no-encontrado'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
