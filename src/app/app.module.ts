import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/flujo/inicio/inicio.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavComponent } from './componentes/generico/nav/nav.component';
import { HeaderComponent } from './componentes/generico/header/header.component';
import { SliderComponent } from './componentes/flujo/slider/slider.component';
import { ThumbnailContenidoComponent } from './componentes/generico/thumbnail-contenido/thumbnail-contenido.component';
import { NoticiasComponent } from './componentes/flujo/noticias/noticias.component';
import { PanelConcursoComponent } from './componentes/flujo/panel-concurso/panel-concurso.component';
import { PanelEncuentroComponent } from './componentes/flujo/panel-encuentro/panel-encuentro.component';
import { PanelOtherComponent } from './componentes/flujo/panel-other/panel-other.component';
import { LoginComponent } from './componentes/flujo/login/login.component';
import { FooterComponent } from './componentes/generico/footer/footer.component';
import { RegistroComponent } from './componentes/flujo/registro/registro.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavComponent,
    HeaderComponent,
    SliderComponent,
    ThumbnailContenidoComponent,
    NoticiasComponent,
    PanelConcursoComponent,
    PanelEncuentroComponent,
    PanelOtherComponent,
    LoginComponent,
    FooterComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
