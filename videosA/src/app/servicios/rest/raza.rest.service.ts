import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Raza} from "../../interfaces/raza";
import {map} from "rxjs/operators";

@Injectable()
export class RazaRestService{
  nombreModelo = '/Raza'
  constructor(private readonly _httpClient:HttpClient ){

  }
  findAll():Observable<Raza[]>{
  //Observable
const razas$ =    this._httpClient
  .get (environment.url + this.nombreModelo)
  .pipe(map((r) => {
      return <Raza[]> r;
    }

    )
  );
  return razas$
  }

}
