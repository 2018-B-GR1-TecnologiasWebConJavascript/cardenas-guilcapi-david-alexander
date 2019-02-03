
// const Component = require('@angular/core').Component
import {Component} from '@angular/core'; // TS
import {} from 'http-server';
import {AuthService} from './servicios/rest/auth.service'; //Js

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
}) // Decorador
export class AppComponent {

  // @OtroDecorador()

  constructor(public readonly _authService:AuthService){

  }

  title = 'videos';


  /*
  @DecoradorMetodo()
  metodo(
    @Propiedad() nombre:string
  ){

  }
  */
}
