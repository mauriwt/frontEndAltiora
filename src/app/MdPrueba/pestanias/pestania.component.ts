import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AlertifyService, CRUDService } from 'src/app/shared/services';
import { Subscription } from 'rxjs';
import { Base } from 'src/app/shared/AppDominio';


import { FormControl, FormGroup } from '@angular/forms';

declare var $;
@Component({
  selector: 'app-pestania',
  templateUrl: './pestania.component.html',
  styleUrls: ['./pestania.component.scss'],
})
export class PestaniaComponent implements OnInit, OnDestroy {


  visible = false;
  estados = ['U', 'R'];

  private subscription: Subscription = new Subscription();

  listaClientes: any[];
  listaOrdenes: any[];
  listaArticulo: any[];
  cargando: boolean;


  clienteForm = new FormGroup({
    idCliente: new FormControl(''),
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
  });

  articuloForm = new FormGroup({
    nombre: new FormControl(''),
    precioUnitario: new FormControl(''),
  });

  constructor(private crud: CRUDService, private notify: AlertifyService) {
    $(document).ready(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  ngOnInit() {
    this.getClientes();
    this.getOrdenes();
    this.getArticulos();
  }

  getOrdenes() {
    this.cargando = true;
    this.crud.obtener(`${Base.integracionRest}Ordenes`).subscribe((response: any) => {
      this.cargando = false;
      this.listaOrdenes = response;
    }, error => {
      this.cargando = false;
      this.notify.openSnackBar('Error de conexión', 'Intente nuevamente.');
    });
  }

  getClientes() {
    this.cargando = true;
    this.crud.obtener(`${Base.integracionRest}Clientes`).subscribe((response: any) => {
      this.cargando = false;
      this.listaClientes = response;
    }, error => {
      this.cargando = false;
      this.notify.openSnackBar('Error de conexión', 'Intente nuevamente.');
    });
  }

  getArticulos() {
    this.cargando = true;
    this.crud.obtener(`${Base.integracionRest}Articulos`).subscribe((response: any) => {
      this.cargando = false;
      this.listaArticulo = response;
    }, error => {
      this.cargando = false;
      this.notify.openSnackBar('Error de conexión', 'Intente nuevamente.');
    });
  }

  getRow(item, estado) {
    if(estado === this.estados[0]){
      this.clienteForm.patchValue(item);
      this.notify.openClose("mdCliente", "show");
    }else{
      this.crud.deleteFormData(`${Base.integracionRest}Clientes/${item.idCliente}`, item).subscribe(respose => respose);
    }

  }


  abrirModal(idModal){
    this.notify.openClose(idModal, "show");
  }

  guardarCiente(){
    if(this.clienteForm.valid){
      var cliente = this.clienteForm.value;
      cliente.Ordenes = [];
      if(cliente.idCliente == 0){
        this.crud.post(`${Base.integracionRest}Clientes`, cliente).subscribe(respose => this.getClientes());
      }else{
        this.crud.put(`${Base.integracionRest}Clientes/${cliente.idCliente}`, cliente).subscribe(respose => this.getClientes());
      }

      this.notify.openClose("mdCliente", "hide");
    }
  }

  guardarArticulo(){
    if(this.clienteForm.valid){
      var articulo = this.articuloForm.value;
      articulo.ordenArticulos = [];
      this.crud.post(`${Base.integracionRest}Articulos`, articulo).subscribe(respose => this.getArticulos());
      this.notify.openClose("mdArticulo", "hide");
    }
  }

  guardarOrden(){

  }



  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
