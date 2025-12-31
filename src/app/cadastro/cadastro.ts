import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatFormField, MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'
import { MatIconModule} from '@angular/material/icon'
import { MatButtonModule} from '@angular/material/button'
import { Cliente } from './cliente';
import { ClienteService } from '../cliente-service'; 


@Component({
  selector: 'app-cadastro',
  standalone: true, // 🔴 ISSO AQUI É O MAIS IMPORTANTE
  imports: [
    FlexLayoutModule, 
    MatCardModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.scss'], // plural (boa prática)
})
export class Cadastro {

  cliente: Cliente = Cliente.newCliente();

  constructor(private service: ClienteService){

  }

  salvar(){
    this.service.salvar(this.cliente);

  }

}

