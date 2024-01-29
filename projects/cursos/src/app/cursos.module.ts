import { NgModule } from '@angular/core';

import { CursosRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursosComponent } from './components/cursos/cursos.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HighContrastModeDetector } from '@angular/cdk/a11y';
import { Platform } from '@angular/cdk/platform';
import { CursoCrearEditarComponent } from './components/cursos/curso-crear-editar/curso-crear-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CursoCrearEditarComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule,
    MaterialModule
  ],
  providers: [HighContrastModeDetector, Platform],
  bootstrap: [AppComponent]
})
export class CursosModule { }
