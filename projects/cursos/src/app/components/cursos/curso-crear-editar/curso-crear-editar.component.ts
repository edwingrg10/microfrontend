import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-curso-crear-editar',
  templateUrl: './curso-crear-editar.component.html',
  styleUrls: ['./curso-crear-editar.component.css'],
})
export class CursoCrearEditarComponent {
  constructor(
    public dialogRef: MatDialogRef<CursoCrearEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
