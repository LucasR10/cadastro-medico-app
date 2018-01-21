
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { rotas } from './app.rotas';
import { MenuComponent } from './menu/menu.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ConfigService } from './service/config.service';
import { MedicoService } from './service/medico.service';
import { TabelaComponent } from './tabela/tabela.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormularioComponent,
    TabelaComponent,
  ],
  imports: [
    BrowserModule, rotas, FormsModule, HttpClientModule
  ],
  providers: [ MedicoService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
