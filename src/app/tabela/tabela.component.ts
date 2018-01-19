import { Medico } from '../formulario/app.medico';
import { MedicoService } from '../medico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

   itens = [];

  constructor(private medicoService: MedicoService ) {

  }

  ngOnInit() {
     this.medicoService.listarService().subscribe( dados => this.itens = dados);
     console.log ( this.itens );
  }

}
