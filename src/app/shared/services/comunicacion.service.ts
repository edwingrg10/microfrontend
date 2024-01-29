import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  // Eventos
  public cursoActualizado = new EventEmitter<string>();
  public alumnoActualizado = new EventEmitter<string>();

  actualizarCurso(data: string) {
    this.cursoActualizado.emit(data);
  }

  actualizarAlumno(data: string) {
    this.alumnoActualizado.emit(data);
  }
}
