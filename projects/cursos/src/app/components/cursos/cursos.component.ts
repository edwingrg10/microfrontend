import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/shared/services/comunicacion.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(private comunicacionService: ComunicacionService) { }

  ngOnInit(): void {
    // Ejemplo de escuchar un evento
    this.comunicacionService.cursoActualizado.subscribe((data: any) => {
      console.log('Curso actualizado:', data);
      // Puedes realizar acciones en respuesta al evento
    });
  }
}
