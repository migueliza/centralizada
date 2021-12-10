import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from  '@angular/common/http';
import { OperatorFunction } from "rxjs";
import { map } from "rxjs";
import { Observable } from "rxjs";
import { Usuario } from "../centralizada/usuario";


@Injectable()
export class PeticionesService{

    public url:string;

    constructor(private _http:HttpClient)
    {
        this.url="http://localhost:8080/centralizada-web/webservice/usuarios"
    }

    getPrueba()
    {
        return 'HOla mmuendo desde el servcio';
    }

    getArticulos()
    {
        return this._http.get(this.url).pipe(map(res => res));
    
    }

    getUsuarios()
    {
        var headers = new HttpHeaders()
        headers .set('content-type', 'application/json')
        headers .set('Access-Control-Allow-Origin', '*')
        return this._http.get(this.url,{'headers':headers}).pipe(map(res => res));
    }

    insertUsuario(usuario:Usuario): Observable<any>{

        //const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(usuario);
      
        console.log(body)
      
        const headers: HttpHeaders = new HttpHeaders();
        headers.append('Access-Control-Allow-Headers','content-type');
        headers.append('Access-Control-Allow-Origin','*');
        headers.append('content-type', '*');
        headers.append('Host','localhost:8080');

        //return this._http.post(this.url , body,{'headers':headers})
        return this._http.post(this.url , usuario, {headers: headers})
    }

}