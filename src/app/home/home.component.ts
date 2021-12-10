import { Component } from "@angular/core";
import { UsuarioService } from "../services/usuarios.service";

@Component({
    selector:'home',
    templateUrl:'./home.component.html',
    providers:[UsuarioService]
})

export class HomeComponent{

    public titulo='Pagina Principal'

    constructor(
        private _usuariosService:UsuarioService
    ){}

    ngOnInit(){
        console.log(this._usuariosService.prueba('srbetanc'));
    }
}