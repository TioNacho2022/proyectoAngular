import { Component } from '@angular/core';
import { Seccion } from '../../models/seccion';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent{

  seccion:number= 0;
  public seccionValor():void {
    this.seccion=  this.seccion+1;
  }

  public listaSeccion:Array<Seccion> =[
    {
      id:1,
      sigla:'SDHH',

    },
    {
      id:2,
      sigla:'GEFA',
    

    }
  ]

}
