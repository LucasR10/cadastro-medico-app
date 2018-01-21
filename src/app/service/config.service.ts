import {Injectable} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Injectable()
export class ConfigService {

   urlService: string;
   SERVICES_URI = 'http://localhost:8090';

  constructor(private rotas: Routes) {
    this.urlService = this.SERVICES_URI;
  }


  logDebug(msg: string) {
    console.log(msg);
  }

  decodeBase64(value: string) {
    return atob(value);
  }

  encodeBase64(value: string) {
    return btoa(value);
  }


  
}
