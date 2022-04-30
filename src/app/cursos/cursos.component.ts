import { Component, OnInit } from '@angular/core';
import { Curso } from './Curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  // - Atributos
  public vetorDeCursos!:Curso[]
  public curso!:Curso
  public id!: number;

  // - Construtor
  constructor(private servico:CursoService) { }

  // - Inicialização
  ngOnInit(): void {
    this.id = -1;
    this.curso = new Curso();
    this.vetorDeCursos = this.servico.listar();
  }

  cadastrar() {
    this.servico.cadastrar(this.curso);
    this.curso = new Curso();
  }

  excluir(id:number) {
    this.servico.excluir(id);
    this.id = -1;
  }

  editar(id:number) {

    this.id = id;

    this.curso = new Curso(
      this.vetorDeCursos[id].nomeCurso,
      this.vetorDeCursos[id].valorCurso,
      this.vetorDeCursos[id].areaCurso
    );
  }

  atualizar() {
    this.servico.alterar(this.id,this.curso);
    this.curso = new Curso();
    this.id = -1;
  }
}
