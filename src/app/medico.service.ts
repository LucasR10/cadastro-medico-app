import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

 @Injectable()
export class MedicoService {

 
  private urlService: string;

  
  constructor(private http: HttpClient) { 
    this.urlService = 'http://localhost:8080';
  }

  listarService() {
    return this.http.get<any[]>(this.urlService + '/listar');
  }
  
  
  adicionar(item: any) {
    return this.http.post( this.urlService + '/adicionar', item);
  }
}
