import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface TextConfirmDialogData {
  title: string;
  message: string;
}

@Component({
  selector: 'app-text-confirm-dialog',
  templateUrl: './text-confirm-dialog.component.html',
  styleUrls: ['./text-confirm-dialog.component.css'],
})
export class TextConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TextConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TextConfirmDialogData
  ) {}

  Close(): void {
    this.dialogRef.close();
  }
}
