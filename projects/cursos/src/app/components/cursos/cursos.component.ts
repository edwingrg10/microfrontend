import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ComunicacionService } from 'src/app/shared/services/comunicacion.service';
import { CursoCrearEditarComponent } from './curso-crear-editar/curso-crear-editar.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  dataSource = new MatTableDataSource<any>(); // Asegúrate de especificar el tipo correcto para tus cursos
  displayedColumns: string[] = ['nombre', 'profesor', 'acciones'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  cursos = [
    { id: 1, nombre: 'Español', profesor: 'Edwin Garzón' },
    { id: 2, nombre: 'Matematicas', profesor: 'Andrea Manrique' },
    // Agrega más datos según sea necesario
  ];
  constructor(
    private comunicacionService: ComunicacionService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    // Ejemplo de escuchar un evento
    this.dataSource.data = this.cursos;
    this.dataSource.paginator = this.paginator;

    this.comunicacionService.cursoActualizado.subscribe((data: any) => {
      console.log('Curso actualizado:', data);
      // Puedes realizar acciones en respuesta al evento
    });
  }

  createEditCourse(curso?: any) {
    const dialogRef = this.dialog.open(CursoCrearEditarComponent, {
      width: '400px',
      data: curso ? { titulo: 'Editar Curso', curso } : null,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Lógica para manejar el resultado después de cerrar la modal de editar
    });
  }
}
