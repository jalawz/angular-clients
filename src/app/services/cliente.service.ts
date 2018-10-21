import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { APICONFIG } from '../../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(public http:Http) { }

  getAll() {
    return this.http.get(`${APICONFIG.baseUrl}/clientes`);
  }

  insertCliente(cliente) {
    return this.http.post(`${APICONFIG.baseUrl}/clientes`, cliente);
  }

  removeCliente(id) {
    return this.http.delete(`${APICONFIG.baseUrl}/clientes/${id}`);
  }
}
