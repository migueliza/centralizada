import { Injectable } from "@angular/core";

@Injectable()
export class UsuarioService{

    public nombre_usuario="macaizai...";

    prueba(nombre_usuario2:string){
        return nombre_usuario2;
    }
}