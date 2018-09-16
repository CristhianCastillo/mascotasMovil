import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {

  public tipoUsuario: string;

  constructor() {
    this.tipoUsuario = 'tipoUsuario';
  }

  get state(){
    return this.tipoUsuario;
  }
  
  set(nuevoEstado: string){
    this.tipoUsuario = nuevoEstado;
  }

}
