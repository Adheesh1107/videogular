import { Component, OnInit } from '@angular/core';
import { VgApiService, VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { ModalStatusService } from '../../services/modal-status.service';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss',
})
export class VideoPlayerComponent implements OnInit {
  // Initialization
  vgApi!: VgApiService;

  constructor(private modalStatusService: ModalStatusService) {}

  ngOnInit(): void {
    this.modalStatusService.modalStatus.subscribe((status) => {
      if (!status) {
        // pause the video since the modal has been closed
        this.vgApi.pause();
      }
    });
  }

  updateModalViewStatus() {
    this.modalStatusService.modalStatus.next(true);
  }

  onPlayerReady(api: VgApiService) {
    this.vgApi = api;
  }
}
