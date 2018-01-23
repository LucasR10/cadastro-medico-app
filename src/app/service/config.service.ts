import {Injectable} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


@Injectable()
export class ConfigService {
 
 urlService: string;
 params = 'params'; 
 private parametroUrl: any;

  constructor(private rotas: Router , private rotaAtiva: ActivatedRoute ) {
    this.urlService = 'http://localhost:4400';
  }


  decodeBase64(value: string) {
    return atob(value);
  }

  encodeBase64(value: string) {
    return btoa(value);
  }

  redirecionarComParametro(rotaName: any, valorParam: any) {
    this.rotas.navigate([rotaName], {queryParams: {params: this.encodeBase64(valorParam)}});
  }


  pegarParametroUrl() {
    this.rotaAtiva.queryParams.subscribe( ( parametro: any ) => { this.parametroUrl = parametro['params'] });
    return this.parametroUrl;
  }


}
