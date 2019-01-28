import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../servicios/rest/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = {
    username: '',
    password: ''
  };

  constructor(private readonly _authService: AuthService) {
  }

  ngOnInit() {
  }

  login() {

    const respuestaLogin$ = this._authService
      .login(
        this.usuario.username,
        this.usuario.password
      );

    respuestaLogin$
      .subscribe(
        (raza) => {
          this._authService.usuario = raza;
          console.log(raza);
        },
        (error) => {
          console.error(error);
        }
      );

  }

}
