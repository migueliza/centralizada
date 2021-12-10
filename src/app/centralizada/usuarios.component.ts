import {Component} from '@angular/core';
import { Usuario } from './usuario';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PeticionesService } from '../services/peticiones.service';

@Component({
    selector:'usuarios',
    templateUrl:'./usuarios.component.html',
    providers:[PeticionesService]
})

export class UsuariosComponent{
    public nombre_componente = 'Componente de usuarios';
    //public listado_usuarios = 'macaizai, mcaiza'

    //public trabajos:Array<any> = ['Caprintero',33,'Fontanero'];

    public usuario:Usuario;
    public usuarios:Array<Usuario>;
    public articulos:any;

    public usuariosServicio:any;

    constructor(

        private _route: ActivatedRoute,
        private _router: Router,
        private _peticionesService:PeticionesService
    ){
        this.usuario = new Usuario("","");
        this.usuarios=[new Usuario("macaizai123","123"),
                       new Usuario("alejaiza","alejaniza123")]
    }

    ngOnInit(){
        //this.usuario = new Usuario('macaizai','123');
        //console.log(this._peticionesService.getPrueba());
        this._peticionesService.getUsuarios().subscribe(
            result =>{
                this.usuariosServicio = result;
                console.log(result);
                if(!this.usuariosServicio){
                    console.log("Error en el servidor");
                }
            },
            error =>{
                var errorMensaje = <any>error;
                console.log(errorMensaje);
            }
        )
    }

    redirigirHome()
    {
        this._router.navigate(['/pagina-principal']);
    }

    onSubmit()
    {
        this.usuarios.push(this.usuario);
        this.registroUsuario(this.usuario);
        this.usuario = new Usuario("",""); 
    }

    registroUsuario(usuario:Usuario)
    {
        
        this._peticionesService.insertUsuario(this.usuario).subscribe(
            result =>{
                this.usuariosServicio = result;
                console.log(result);
                if(!this.usuariosServicio){
                    console.log("Error en el servidor");
                }
            },
            error =>{
                var errorMensaje = <any>error;
                console.log(errorMensaje);
            }
        )
    }
}