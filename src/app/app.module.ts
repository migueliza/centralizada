import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './centralizada/usuarios.component';
import { PuertoComponent } from './centralizada/puerto.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [//permite declarar directivas/pipes
    AppComponent,
    UsuariosComponent,
    PuertoComponent,
    HomeComponent
  ],
  imports: [ //cargar modulos servcios de forma global
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent] //componente principal
})
export class AppModule { }
