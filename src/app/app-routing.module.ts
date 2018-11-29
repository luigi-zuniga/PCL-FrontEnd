import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { InicioComponent }  from "./componentes/flujo/inicio/inicio.component";
import { LoginComponent  }  from "./componentes/flujo/login/login.component";
import { RegistroComponent } from "./componentes/flujo/registro/registro.component"

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
 