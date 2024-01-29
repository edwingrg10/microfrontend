import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesoresComponent } from './components/profesores/profesores.component';

const routes: Routes = [
  { path: '', component: ProfesoresComponent },
  // Agrega más rutas según sea necesario
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
