import { Medico } from '../formulario/app.medico';
import { ConfigService } from './config.service';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class MedicoService {


  private urlService: string;
 

  constructor(private http: HttpClient , private config: ConfigService ) {
    this.urlService = config.urlService;
  }

  adicionar(medico: any) {
    console.log( this.urlService + '/adicionar', medico );
    this.http.post(this.urlService + '/adicionar', medico).subscribe();
  }

  atualizar(medico: any) {
    this.http.put(this.urlService + '/atualizar', medico);
  }

  deletar(codigo: number) {
      this.http.delete(this.urlService + '/deletar/' + codigo ).subscribe(); 
  }

  listar() {
   return this.http.get<any[]>(this.urlService + '/listar');
  }

  buscar(codigo: string) {
    return this.http.get<any>(this.urlService + '/listar/' + this.config.decodeBase64(codigo));
  }
  
  pegarParametro() {
    return this.config.pegarParametroUrl();
  }
  
}


