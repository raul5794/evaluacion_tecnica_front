import { Component, OnInit } from '@angular/core';
import { VentaModel } from '../ventaDomain';
import { VentaService } from '../venta.service';
import { response } from 'express';
import { error } from 'console';
import { ventaDetalle } from '../ventaDetalleDomain';

@Component({
  selector: 'app-venta-lista',
  templateUrl: './venta-lista.component.html',
  styleUrl: './venta-lista.component.css'
})
export class VentaListaComponent implements OnInit{

 
constructor(private  ventaService:VentaService){}

  ventas!: VentaModel[];
  venta! : VentaModel;
  control : boolean = false;
  detalles!: ventaDetalle[];
serie!:any;
numero!:any;
  ngOnInit(): void {
    this.getVentas();
  }

  onDetalle(i:any){
    this.control = !this.control;
this.detalles = i.detalleVentasSet;
this.serie = i.serie;
this.numero = i.numero;
  }
  onEliminarVenta(i : any){
  this.ventaService.eliminarVenta(i.idVenta).subscribe({
    next:data=>{console.log("succefull")},
    error:error =>{
      console.log("SAD",error);
    }
  });
  this.getVentas();
  this.getVentas();
  }

  getVentas(){
    console.log("getventas");
    this.ventaService.getVentas().subscribe(response => {this.ventas = response,console.log(response)});
  }
  onRegresar(){
    this.control = !this.control;
  }
}
