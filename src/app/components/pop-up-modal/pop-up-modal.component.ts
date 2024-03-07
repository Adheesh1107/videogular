import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from '../../services/modal-status.service';

@Component({
  selector: 'app-pop-up-modal',
  standalone: true,
  imports: [],
  templateUrl: './pop-up-modal.component.html',
  styleUrl: './pop-up-modal.component.scss',
})
export class PopUpModalComponent {
  showModal = false;
}
