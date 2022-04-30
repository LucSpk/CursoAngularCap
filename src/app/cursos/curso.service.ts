import { Injectable } from '@angular/core';
import { Curso } from './Curso';


// - providedIn: 'root' permite acesso total do serviço
@Injectable({
  providedIn: 'root'
})

// - Classe
export class CursoService {

  // - Construtor
  constructor() {

  }

  // - Vetor de Cursos
  public vetorCursos: Curso[] = [
    new Curso("Angular", 800, "Desenvolvimento"),
    new Curso("PHO", 590, "Desenvolvimento"),
    new Curso("PhotoShop", 470, "Design"),
  ]

  // - Cadastro de Cursos
  public cadastrar(curso:Curso) {
    this.vetorCursos.push(curso)
  }

  // - Seleção de Curso
  public listar() {
    return this.vetorCursos
  }

  // - Alteração de Cursos
  public alterar(id:number, curso:Curso) {
    this.vetorCursos[id] = curso
  }

  // - Exclusão de Cursos
  public excluir(id:number) {
    this.vetorCursos.splice(id, 1)
  }
}
