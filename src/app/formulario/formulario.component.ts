import { MedicoService } from '../medico.service';
import { Component, OnInit } from '@angular/core';
import { Medico } from './app.medico';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  medico: Medico = new Medico();
  medicoService: MedicoService;
  
  constructor() { }

  ngOnInit() {
  }

  cadastraUsuario(frm: FormControl) {
    this.medicoService.adicionar(frm.value);
    console.log(frm.value );
  }

}
