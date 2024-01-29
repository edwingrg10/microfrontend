import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/shared/services/comunicacion.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  constructor(private comunicacionService: ComunicacionService) { }

  ngOnInit(): void {
    // Ejemplo de emitir un evento
    this.comunicacionService.actualizarAlumno('Datos actualizados del alumno');
  }
}
