import { MedicoService } from '../service/medico.service';
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
  
  idMedico: any;
  
  msg: string = null;
  
  especialidades = [];
  
  sexo = [];
  
  constructor(private  medicoService: MedicoService ) { }

  ngOnInit() {
    
    this.idMedico = this.medicoService.pegarParametro();
    
    if ( this.idMedico !== undefined ) {
        this.medicoService.buscar( this.idMedico  ).subscribe( dados => this.medico = dados);     
      }
     
     this.sexo = [{sexo: 'Masculino', label: 'Masculino'}, { sexo : 'Ferminino', label : 'Ferminino'}];
     this.especialidades  = this.listaEspecialidades();
     
  }

  cadastra(frm: FormControl) {
     this.medicoService.adicionar(frm.value);
     console.log(frm.value );
     frm.reset();
     this.msg = 'Dados gravado com sucesso!';
  }
  
  listaEspecialidades() {
   return [
     { codigo:  'Acupuntura', label: 'Acupuntura'}, 
     { codigo : 'Alergia e Imunologia', label : 'Alergia e Imunologia '},
     { codigo : 'Cardiologia', label : 'Cardiologia '},
     { codigo : 'Cirurgia Cardiovascular', label : 'Cirurgia Cardiovascular'},
     { codigo : 'Cirurgia Geral', label : 'Cirurgia Geral'},
     { codigo : 'Cirurgia Pediátrica', label : 'Cirurgia Pediátrica'},
     { codigo : 'Cirurgia Vascular', label : 'Cirurgia Vascular'},
     
   ];
    // TODO: implementar via servico;
  }
  
  
}
