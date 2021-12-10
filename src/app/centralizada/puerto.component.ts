import { Component } from "@angular/core";
import { Puerto } from "./Puerto";

@Component({
    selector:'puerto',
    templateUrl:'./puerto.component.html'
})

export class PuertoComponent{
    public nombre_componente = 'Componente de puertos';
    public listado_puertos = '11411, 11431'

    public trabajos:Array<any> = ['22132',33,'312321'];

    public puerto:Puerto;

    /*constructor(){
        console.log(this.trabajos);
    }*/

    ngOnInit(){
        this.puerto = new Puerto('11431');
        console.log(this.puerto);
    }


}
