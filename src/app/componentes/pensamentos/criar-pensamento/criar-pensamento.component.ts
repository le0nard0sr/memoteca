import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Pensamento } from '../pensamento/pensamento.model';
import { PensamentoService } from '../pensamento/pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css',
})
export class CriarPensamentoComponent {
  pensamento = signal<Pensamento>({
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  });

  constructor(private service: PensamentoService, private router: Router) {}

  criarPensamento() {
    this.service
      .criar(this.pensamento())
      .subscribe(() => this.router.navigate(['/listarPensamento']));
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
