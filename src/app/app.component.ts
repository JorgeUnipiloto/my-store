import { Component, OnInit,Input } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { SwitchService } from './service/switch.service';
import { ServicioDeFavoritosService } from './servicio-de-favoritos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //clientes: Cliente[] = [];

  //info = Object.values(this.clientes);

    modalswitch:boolean=false;


  constructor(private serviciof:ServicioDeFavoritosService, private modalSS:SwitchService) { }
  //title = 'my-store';
  //public clientes:Array<any>=[{id: 2, name: 'Pepito', email: 'pepiail.com', age: 15, salary: 550,}]
  public clientes:Array<any>=[]
  public datos:Array<any>=[]
  listObservers: Array<any>=[]



  ngOnInit(): void {

    this.serviciof.disparador.subscribe(data =>{
      console.log('Recibiendo data',data["data"])
      this.datos =data["data"]
      //this.clientes.push(data["data"]);

    }

    )

    this.modalSS.$modal.subscribe((valor)=>{
      console.log('valor:', valor)
      this.modalswitch=valor})




  }

  listarClientes(){



      console.log('Recibiendo data---->',this.datos)
      this.clientes.push(this.datos);



   //         location.reload();
   //alert('Esto es una prueba')




  }


  buscarClientes(){

  }

  openModal(){

    this.modalswitch = true;
  }





}






