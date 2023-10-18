import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";




import { DecimalPipe } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FechaModule } from './fecha.module';
import { MatListModule } from '@angular/material/list';


@NgModule({
  imports: [
    CommonModule,
    FechaModule,
    FormsModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatListModule,

  ],
  declarations: [],
  exports: [
    CommonModule,
    FechaModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,



    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatListModule,

  ],
  providers: [
    DecimalPipe,
  ]
})
export class SharedModule { }
