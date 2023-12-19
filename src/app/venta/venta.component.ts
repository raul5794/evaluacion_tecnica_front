import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { VentaService } from '../venta.service';
import { VendedorService } from '../vendedor.service';
import { ClienteService } from '../cliente.service';
import { ventaDetalle } from '../ventaDetalleDomain';
import { VentaModel } from '../ventaDomain';
import { ProductoDomain } from '../../productoDomain';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrl: './venta.component.css'
})
export class VentaComponent implements OnInit{

  constructor(private productoService:ProductoService,
    private ventaService : VentaService,
    private vendedorService : VendedorService,
    private clienteService : ClienteService) {  
  }
 

  productos : ProductoDomain[] =[];
  vendedores : any = [];
  clientes : any = [];
  vendedor  = null;
  cliente = null;
  detalles:ventaDetalle[] = [];
  venta :VentaModel = new VentaModel(null,null,null,null,null,[],null,null,1) ;
  detalle : ventaDetalle = new ventaDetalle(null,null,null,null,new ProductoDomain(null,null,null,null),1);
  

  onSubmit(){
  this.venta.detalleVentasSet = this.detalles;
  this.detalles = [];
    this.ventaService.saveVentas(this.venta).subscribe(response =>console.log(response));
  }

  ngOnInit(): void {
     this.productoService.getProductos().subscribe(
      (response) =>{this.productos = response},
    );

    this.clienteService.getClientes().subscribe(
      (response) => {this.clientes = response}
    )

    this.vendedorService.getVendedores().subscribe(
      (response =>{this.vendedores = response})
    )
  }

  onAgregarDetalle(){
    if(this.detalle.cantidad>0 && this.detalle.precio>0 ){
      this.detalle.total = this.detalle.cantidad * this.detalle.precio;
      this.detalles.push(JSON.parse(JSON.stringify(this.detalle)));
      this.calcularTotal();
      this.detalle = new ventaDetalle(null,null,null,null,new ProductoDomain(null,null,null,null),1);}
  }

  onEliminarDetalle(i :any){
  this.detalles.splice(i,1);
  this.calcularTotal();
  }

  calcularTotal(){
    this.venta.total = this.detalles.map(x=>x.total).reduce((a,b)=>a+b,0);
  }
  

}
