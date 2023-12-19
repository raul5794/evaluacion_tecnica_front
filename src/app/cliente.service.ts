import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../appSettings';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http: HttpClient) { }

  getClientes(){
return this.http.get(AppSettings.API_ENDPOINT+'clientes')
  }
}
