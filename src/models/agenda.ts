import { Cita } from './cita';

export class Agenda{
  public nombre: string;
  public citas: Array<Cita>;

  constructor(nombre?: string, citas?: Array<Cita>){
    this.nombre = nombre;
    this.citas = citas;
  }
}
