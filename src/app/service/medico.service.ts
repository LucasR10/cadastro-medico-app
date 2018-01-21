import { ConfigService } from './config.service';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class MedicoService {


  private urlService: string;
 

  constructor(private http: HttpClient ) {
    this.urlService = 'http://localhost:8090';
  }

  adicionar(medico: any) {
    this.http.post(this.urlService + '/adicionar', medico);
  }

  atualizar(medico: any) {
    this.http.put(this.urlService + '/atualizar', medico);
  }

  deletar(codigo: number) {
    console.log( this.urlService + '/deletar/' + codigo  );
      this.http.delete(this.urlService + '/deletar/' + codigo ); 
  }

  listar() {
    return this.http.get<any[]>(this.urlService + '/listar');
  }

  buscar(codigo: string) {
    return this.http.get<any[]>(this.urlService + '/listar/' + codigo);
  }
  


}


