import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterModule } from '@angular/router';
import { PestaniaModule } from './pestanias/pestania.module';

@NgModule({
  imports: [CommonModule, RouterModule, PestaniaModule],
  declarations: [],
  exports: [],
  providers: [
    DecimalPipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RucModule { }
