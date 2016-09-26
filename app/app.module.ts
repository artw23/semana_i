import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { routing, routedComponents } from './app.routes';


import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports:[
    BrowserModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_RatKERNuy_fSaiYZ55U12ELwpkQ3W9k'
    })
  ],
  declarations:[
    AppComponent,
    routedComponents
  ],
  bootstrap:[
    AppComponent
  ]
})

export class AppModule { }
