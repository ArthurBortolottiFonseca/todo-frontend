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
      .subscribe(tarefas => {
        this.arrayDeTarefas = tarefas;
      });
  }

  criarTarefa() {
    if (!this.novaDescricao.trim()) return;
    this.http.post<Tarefa>(`${this.apiURL}/post`, { descricao: this.novaDescricao })
      .subscribe(() => {
        this.novaDescricao = '';
        this.READ_tarefas();
      });
  }

  marcarComoFeita(tarefa: Tarefa) {
    this.http.put<Tarefa>(`${this.apiURL}/put/${tarefa._id}`, { statusRealizada: true })
      .subscribe(() => this.READ_tarefas());
  }

  excluirTarefa(tarefa: Tarefa) {
    this.http.delete(`${this.apiURL}/delete/${tarefa._id}`)
      .subscribe(() => this.READ_tarefas());
  }
}