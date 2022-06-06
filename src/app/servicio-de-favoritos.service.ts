import { Injectable, Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDeFavoritosService {
  @Output() disparador: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
