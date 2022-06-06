import { Component, Input, OnInit } from '@angular/core';
import { ServicioDeFavoritosService } from '../servicio-de-favoritos.service';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  //@Input() dataEntrante:any;
  //@Input() dataEntrante:any;
  clientes: Cliente[]=[];
  //@Input() clientes1 = Object.values(this.clientes);

  //constructor(private clienteService:ClienteService) { };
  constructor(private clienteService:ClienteService,private serviciof:ServicioDeFavoritosService){ }




  ngOnInit(): void {
    this.clienteService.getAll().subscribe(
      c =>{this.clientes=c
        console.log('recibiendo bd..',this.clientes)
        this.serviciof.disparador.emit({
          data:c

        })
      }
    )







  }





}




