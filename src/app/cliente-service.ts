import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  static REPO_CLIENTES = "_CLIENTES";

  constructor(){ }

  salvar(cliente: Cliente){
    const storage = this.obterStorage();
      storage.push(cliente);

      localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  pesquisarClientes(nomeBusca: string) : Cliente[] {
    
    const clientes = this.obterStorage();

    if(!nomeBusca){
      return clientes;

    }

    return clientes.filter(Cliente => Cliente.nome?.indexOf(nomeBusca) !== -1)
  }

  buscarClientePorId(id: string) : Cliente | undefined {
    const clientes = this.obterStorage();
    return clientes.find(cliente => cliente.id === id)
  }

 private obterStorage() : Cliente[] {
    const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);
    if(repositorioClientes){
      const clientes: Cliente [] = JSON.parse(repositorioClientes);
      return clientes; 
    }

    const Clientes: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(Clientes))
    return Clientes;

  }
  
}
