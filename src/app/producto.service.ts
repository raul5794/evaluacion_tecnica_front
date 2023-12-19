import { Injectable } from '@angular/core';
import { AppSettings } from '../appSettings';
import { ProductoDomain } from '../productoDomain';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getProductos(){
return this.http.get<ProductoDomain[]>(AppSettings.API_ENDPOINT+'productos')
  }

}
