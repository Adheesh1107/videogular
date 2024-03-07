import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopUpModalComponent } from './components/pop-up-modal/pop-up-modal.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { CommonModule } from '@angular/common';
import { ModalStatusService } from './services/modal-status.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PopUpModalComponent,
    VideoPlayerComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'videogular';
  showModal: boolean = false;
  constructor(private modalStatusService: ModalStatusService) {}
  ngOnInit(): void {
    this.modalStatusService.modalStatus.subscribe((status) => {
      this.showModal = !this.showModal;
    });
  }
}
