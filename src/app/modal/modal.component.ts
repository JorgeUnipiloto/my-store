import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../clientes/cliente';
import { ClienteService } from '../clientes/cliente.service';
import { SwitchService } from '../service/switch.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  cliente:Cliente = new Cliente();
  titulo:string="Registro de Cliente";

  constructor(private modalSS:SwitchService, private clienteservice:ClienteService, private router:Router) { }

  ngOnInit(): void {
  }

  create(): void {
    console.log(this.cliente);
    this.clienteservice.create(this.cliente).subscribe(
      res=>this.cliente
    );
    location.reload();
    //this.modalSS.$modal.emit(false)
  }

  closeModal(){

    console.log('Ejecuta botn cerrar')
    this.modalSS.$modal.emit(false)
  }

}
