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

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['nombre', 'profesor', 'acciones'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  cursos = [
    { id: 1, nombre: 'Español', profesor: 'Edwin Garzón' },
    { id: 2, nombre: 'Matemáticas', profesor: 'Andrea Manrique' },
  ];
  constructor(
    private comunicacionService: ComunicacionService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.data = this.cursos;
    this.dataSource.paginator = this.paginator;
    this.comunicacionService.cursoActualizado.subscribe((data: any) => {
      console.log('Curso actualizado:', data);
    });
  }

  createEditCourse(curso?: any) {
    const dialogRef = this.dialog.open(CursoCrearEditarComponent, {
      width: '400px',
      data: curso ? { titulo: 'Editar Curso', curso } : null,
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}
