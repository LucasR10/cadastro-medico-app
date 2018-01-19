
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MenuComponent } from './menu/menu.component';
import { TabelaComponent } from './tabela/tabela.component';
import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

  const APP_ROUTES: Routes = [
    { path: 'cadastro', component: FormularioComponent },
    { path: 'listar', component: TabelaComponent },
    { path: 'todo', component: AppComponent }

];

export const rotas: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
