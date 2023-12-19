import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VentaModel } from './ventaDomain';
import { AppSettings } from '../appSettings';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) { }

  getVentas(){
    return this.http.get<VentaModel[]>(AppSettings.API_ENDPOINT+'ventas')
  }

  saveVentas(venta : VentaModel){
    return this.http.post<VentaModel>(AppSettings.API_ENDPOINT+'venta',venta);
  }

  eliminarVenta(id:any){
    return this.http.delete(AppSettings.API_ENDPOINT+'venta/'+id);
  }
}
