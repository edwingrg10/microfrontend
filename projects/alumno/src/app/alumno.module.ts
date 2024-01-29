import { NgModule } from '@angular/core';

import { AlumnoRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AlumnoCrearEditarComponent } from './components/alumno/alumno-crear-editar/alumno-crear-editar.component';
import { AlumnoComponent } from './components/alumno/alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    AlumnoCrearEditarComponent
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AlumnoModule { }
