import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/compontents/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'cursos', loadChildren: () => import('../../projects/cursos/src/app/cursos.module').then(m => m.CursosModule) },
      { path: 'alumnos', loadChildren: () => import('../../projects/alumno/src/app/alumno.module').then(m => m.AlumnoModule) },
      { path: 'profesores', loadChildren: () => import('../../projects/profesores/src/app/profesor.module').then(m => m.ProfesorModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
