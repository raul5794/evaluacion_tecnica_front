import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../appSettings';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private http: HttpClient) { }

  getVendedores(){
return this.http.get(AppSettings.API_ENDPOINT+'vendedores')
  }
}
