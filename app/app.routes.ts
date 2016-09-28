import { Routes, RouterModule } from '@angular/router';

import {ContestarEncuestasComponent} from './contestar-encuestas/contestarEncuestas.component';
import {HomeComponent} from './home/home.component';
import {LibrosRecomendadosComponent} from './libros-recomendados/librosRecomendados.component';
import {RegistrateComponent} from './registrate/registrate.component';
import {InfoComponent} from './info/info.component';
import {BlogComponent} from './blog/blog.component';
import {PremiosComponent} from './premios/premios.component';

import { HttpModule, JsonpModule } from '@angular/http';


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
    path: 'iniciar-sesion',
    component:RegistrateComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'premios',
    component: PremiosComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [PremiosComponent, BlogComponent,ContestarEncuestasComponent, HomeComponent, LibrosRecomendadosComponent, RegistrateComponent, InfoComponent];
