import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopUpModalComponent } from './components/pop-up-modal/pop-up-modal.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { CommonModule } from '@angular/common';
import { ModalStatusService } from './services/modal-status.service';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PopUpModalComponent,
    VideoPlayerComponent,
    CommonModule,
    MatDialogModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'videogular';
  dialogRef!: MatDialogRef<PopUpModalComponent>;
  constructor(
    private modalStatusService: ModalStatusService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.modalStatusService.modalStatus.subscribe((status) => {
      if (status) {
        // Open the modal when modalStatus is true
        this.dialogRef = this.dialog.open(PopUpModalComponent);

        this.dialogRef.afterClosed().subscribe(() => {
          // Emit false value when the modal is closed
          this.modalStatusService.modalStatus.next(false);
        });
      }
    });
  }
}
