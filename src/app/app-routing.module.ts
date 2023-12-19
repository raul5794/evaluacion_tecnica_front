import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentaComponent } from './venta/venta.component';
import { ProductoComponent } from './producto/producto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { VentaListaComponent } from './venta-lista/venta-lista.component';

const routes: Routes = [
  {
    path:'venta', component : VentaComponent
  },
  {path:'producto', component : ProductoComponent},
  {
    path: 'cliente', component : ClienteComponent
  },
  {
    path : 'vendedor' , component : VendedorComponent
  },
{
  path:'ventas',component:VentaListaComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
