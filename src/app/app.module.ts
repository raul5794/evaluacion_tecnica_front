import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { VentaComponent } from './venta/venta.component';
import { ProductoComponent } from './producto/producto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { DetalleVentaComponent } from './detalle-venta/detalle-venta.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VentaListaComponent } from './venta-lista/venta-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    VentaComponent,
    ProductoComponent,
    ClienteComponent,
    VendedorComponent,
    DetalleVentaComponent,
    VentaListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
