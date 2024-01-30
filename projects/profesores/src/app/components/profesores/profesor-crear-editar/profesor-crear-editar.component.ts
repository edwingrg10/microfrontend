import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-profesor-crear-editar',
  templateUrl: './profesor-crear-editar.component.html',
  styleUrls: ['./profesor-crear-editar.component.css']
})
export class ProfesorCrearEditarComponent {

  constructor(
    public dialogRef: MatDialogRef<ProfesorCrearEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
