import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url:string='http://localhost:8080/apirest/all';
  private url1:string='http://localhost:8080/apirest/save';

  constructor(private http:HttpClient) { }

  // obetener clientes
  getAll():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

  create(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url1, cliente)

  }

  //obtener un cliente
  get(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(this.url+'/'+id);
  }

  //actualizar un cliente

  update(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url, cliente);

  }

  //eliminar un cliente

  delete(id:number):Observable<Cliente>{
    return this.http.delete<Cliente>(this.url+'/'+id);
  }

}
