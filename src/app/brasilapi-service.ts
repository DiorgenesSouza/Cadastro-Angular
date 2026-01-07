import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado, Municipio } from './brasil.models';

@Injectable({
  providedIn: 'root',
})
export class Brasilapi {

  private readonly baseURL = 'https://brasilapi.com.br/api';

  constructor(private http: HttpClient) {}

  listarUFs(): Observable<Estado[]> {
    return this.http.get<Estado[]>(
      `${this.baseURL}/ibge/uf/v1`
    );
  }

  listarMunicipios(uf: string): Observable<Municipio[]> {
    return this.http.get<Municipio[]>(
      `${this.baseURL}/ibge/municipios/v1/${uf}`
    );
  }
}
