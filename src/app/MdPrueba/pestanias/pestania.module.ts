import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PestaniaComponent } from './pestania.component';
import { PestaniaRoutes } from './pestania.routes';

import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PestaniaComponent],
  exports: [PestaniaComponent],
  imports: [
    RouterModule.forChild(PestaniaRoutes),
    CommonModule,
    FormsModule, ReactiveFormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PestaniaModule {}
