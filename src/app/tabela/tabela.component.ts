import {Medico} from '../formulario/app.medico';
import {MedicoService} from '../service/medico.service';
import {ConfigService} from '../service/config.service';
import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  medicos = [];

  constructor(private medicoService: MedicoService, private config: ConfigService) {

  }

  ngOnInit() {
    this.listar();
  }

  deletar(medico: any) {
    this.medicoService.deletar(medico.codigo);
    this.medicos.splice(this.medicos.indexOf(medico), 1);
  }


  atualizar(codigo: any) {
    this.config.redirecionarComParametro('cadastro', codigo);
  }

  listar() {
    this.medicoService.listar().subscribe(retorno => this.medicos = retorno);
  }


}
