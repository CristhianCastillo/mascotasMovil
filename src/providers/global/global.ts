import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {

  public _id: string;
  public _usuario: string;
  public _password: string;
  public _tipoUsuario: string;
  public _estado: boolean;

  constructor() {
    this._estado = false;
    this._tipoUsuario = 'Usuario';
  }

  get id(){
    return this._id;
  }

  set id(id: string){
    this._id = id;
  }

  get usuario(){
    return this._usuario;
  }

  set usuario(usuario: string){
    this._usuario = usuario;
  }

  get password(){
    return this._password;
  }

  set password(password: string){
    this._password = password;
  }

  get tipoUsuario(){
    return this._tipoUsuario;
  }

  set tipoUsuario(tipoUsuario: string){
    this._tipoUsuario = tipoUsuario;
  }

  get estado(){
    return this._estado;
  }

  set estado(estado: boolean){
    this._estado = estado;
  }

}
