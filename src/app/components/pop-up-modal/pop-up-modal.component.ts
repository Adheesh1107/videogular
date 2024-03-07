import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from '../../services/modal-status.service';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-pop-up-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './pop-up-modal.component.html',
  styleUrl: './pop-up-modal.component.scss',
})
export class PopUpModalComponent {
  constructor(private dialogRef: MatDialogRef<PopUpModalComponent>) {}
  onCloseModal() {
    this.dialogRef.close();
  }
}
