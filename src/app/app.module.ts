import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { routes } from './app.routing';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/es-EC';
import localeFrExtra from '@angular/common/locales/extra/es-EC';


import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { NoPageModule } from './no-page/no-page.module';

import { RucModule } from './MdPrueba/ruc.module';

import * as $ from 'jquery';

registerLocaleData(localeFr, 'es-EC', localeFrExtra);
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserAnimationsModule,
    MatDialogModule, MatSnackBarModule,
    RucModule,
    NoPageModule,

    HammerModule,
  ],
  exports: [RouterModule, MatDialogModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-EC' }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
