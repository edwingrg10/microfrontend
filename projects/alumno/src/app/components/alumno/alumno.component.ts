import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ComunicacionService } from 'src/app/shared/services/comunicacion.service';
import { AlumnoCrearEditarComponent } from './alumno-crear-editar/alumno-crear-editar.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['nombre', 'curso', 'acciones'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  alumns = [
    { id: 1, nombre: 'Martha G', curso: 'Español' },
    { id: 2, nombre: 'Carlos G', curso: 'Matematicas' },
  ];
  constructor(
    private comunicacionService: ComunicacionService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.comunicacionService.actualizarAlumno('Datos actualizados del alumno');
    this.dataSource.data = this.alumns;
    this.dataSource.paginator = this.paginator;
  }

  createEditAlumn(alumn?: any) {
    const dialogRef = this.dialog.open(AlumnoCrearEditarComponent, {
      width: '400px',
      data: alumn ? { titulo: 'Editar Alumno', alumn } : null,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Lógica para manejar el resultado después de cerrar la modal de editar
    });
  }
}
