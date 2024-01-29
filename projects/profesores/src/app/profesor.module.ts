import { NgModule } from '@angular/core';
import { ProfesorRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ProfesoresComponent } from './components/profesores/profesores.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfesoresComponent
  ],
  imports: [
    CommonModule,
    ProfesorRoutingModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ProfesorModule { }
