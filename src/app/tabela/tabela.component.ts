import { Medico } from '../formulario/app.medico';
import { MedicoService } from '../service/medico.service';
import { ConfigService } from '../service/config.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

   medicos = [];

  constructor(private medicoService: MedicoService, private rotas: Router  ) {

  }

  ngOnInit() {
     this.medicoService.listar().subscribe( dados => this.medicos = dados);
     console.log ( this.medicos.values );
  }
  
  deletar(codigo: number) {
    this.medicoService.deletar( codigo );
  }
  
  
 atualizar(codigo: number) {
     this.rotas.navigate(['/cadastro'], {queryParams: {'codigo' :  codigo } } );
  }
  

}
