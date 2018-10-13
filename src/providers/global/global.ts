import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {

  public tipoUsuario: string;
  public estado: boolean;

  constructor() {
    this.estado = false;
    this.tipoUsuario = 'usuario';
  }

  get state(){
    return this.tipoUsuario;
  }

  get estadoUsuario(){
    return this.estado;
  }

  actulizarEstado(estado: boolean){
    this.estado = estado;
  }
  
  set (nuevoEstado: string){
    this.tipoUsuario = nuevoEstado;
  }

}
