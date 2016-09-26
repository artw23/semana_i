import { Routes, RouterModule } from '@angular/router';

import {ContestarEncuestasComponent} from './contestar-encuestas/contestarEncuestas.component';
import {HomeComponent} from './home/home.component';
import {LibrosRecomendadosComponent} from './libros-recomendados/librosRecomendados.component';
import {RegistrateComponent} from './registrate/registrate.component';
import {InfoComponent} from './info/info.component';

const appRoutes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'contestar-encuestas',
    component: ContestarEncuestasComponent
  },
  {
    path: 'libros-recomendados',
    component: LibrosRecomendadosComponent
  },
  {
    path: 'registrate',
    component:RegistrateComponent
  },
  {
    path: 'info',
    component: InfoComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [ContestarEncuestasComponent, HomeComponent, LibrosRecomendadosComponent, RegistrateComponent, InfoComponent];
