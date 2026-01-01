import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { ClienteService } from '../cliente-service';
import { Cliente } from '../cadastro/cliente';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,

    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './consulta.html',
  styleUrl: './consulta.scss',
})
export class Consulta implements OnInit {


  nomeBusca: string = '';
  listaClientes: Cliente[] = [];
  colunasTable: string[] = ['id', 'nome', 'cpf', 'dataNascimento', 'email', 'acoes'];

  constructor(
  private service: ClienteService,
  private router: Router
) {}


  ngOnInit(): void {
    this.listaClientes = this.service.pesquisarClientes('');
  }

  pesquisar(){
   this.listaClientes = this.service.pesquisarClientes(this.nomeBusca)

  }

  preparaEditar(id: string){
  this.router.navigate(['/cadastro'], { queryParams: {"id": id} })
  }
}
