import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Tarefa {
  _id: string;
  descricao: string;
  statusRealizada: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class AppComponent implements OnInit {
  title = 'TODOapp';
  arrayDeTarefas: Tarefa[] = [];
  apiURL = 'http://localhost:3000/api';
  novaDescricao = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.READ_tarefas();
  }

  READ_tarefas() {
    this.http.get<Tarefa[]>(`${this.apiURL}/getAll`)
      .subscribe({
        next: (tarefas) => {
          this.arrayDeTarefas = tarefas;
          console.log('Tarefas carregadas:', tarefas);
        },
        error: (erro) => {
          console.error('Erro ao carregar tarefas:', erro);
        }
      });
  }

  criarTarefa() {
    if (!this.novaDescricao.trim()) return;
    
    console.log('Tentando criar tarefa:', this.novaDescricao);
    
    this.http.post<Tarefa>(`${this.apiURL}/post`, { descricao: this.novaDescricao })
      .subscribe({
        next: () => {
          console.log('Tarefa criada com sucesso');
          this.novaDescricao = '';
          this.READ_tarefas();
        },
        error: (erro) => {
          console.error('Erro ao criar tarefa:', erro);
        }
      });
  }

  marcarComoFeita(tarefa: Tarefa) {
    this.http.put<Tarefa>(`${this.apiURL}/put/${tarefa._id}`, { statusRealizada: true })
      .subscribe({
        next: () => {
          console.log('Tarefa marcada como feita');
          this.READ_tarefas();
        },
        error: (erro) => {
          console.error('Erro ao marcar tarefa:', erro);
        }
      });
  }

  excluirTarefa(tarefa: Tarefa) {
    this.http.delete(`${this.apiURL}/delete/${tarefa._id}`)
      .subscribe({
        next: () => {
          console.log('Tarefa excluída com sucesso');
          this.READ_tarefas();
        },
        error: (erro) => {
          console.error('Erro ao excluir tarefa:', erro);
        }
      });
  }
}