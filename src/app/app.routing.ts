import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importar componentes
import { UsuariosComponent } from "./centralizada/usuarios.component";
import { PuertoComponent } from "./centralizada/puerto.component";
import { HomeComponent } from './home/home.component';

const appRoutes: Routes=[
    {path:'',component:HomeComponent},
    {path: 'usuarios',component:UsuariosComponent},
    {path: 'puerto',component:PuertoComponent},
    {path: 'pagina-principal',component:HomeComponent},
    {path:'**', component:HomeComponent}
];

export const appRoutingProviders:any[] = [];

export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);