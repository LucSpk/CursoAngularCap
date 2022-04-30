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
  vetorDeCursos!:Curso[]
  curso!:Curso
  private id!: number;

  nomeDoCurso!:string
  valorDoCurso!:number
  areaDoCurso!:string

  // - Construtor
  constructor(private servico:CursoService) { }

  // - Inicialização
  ngOnInit(): void {
    this.curso = new Curso()
    this.vetorDeCursos = this.servico.listar()
  }

  //this.servico.cadastrar(this.curso)
  cadastrar() {
    alert(this.curso.valorCurso)
  }
}
