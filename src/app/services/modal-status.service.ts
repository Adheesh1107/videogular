import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalStatusService {
  modalStatus = new Subject<boolean>();
  constructor() {}

  // openModal() {
  //   this.modalStatus = true;
  // }
}
