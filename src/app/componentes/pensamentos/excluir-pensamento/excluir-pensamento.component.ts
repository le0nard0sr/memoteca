import { Pensamento } from './../pensamento/pensamento.model';
import { Component, input, OnInit, signal } from '@angular/core';
import { PensamentoService } from '../pensamento/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: true,
  imports: [],
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css',
})
export class ExcluirPensamentoComponent implements OnInit {
  pensamento = signal<Pensamento>({
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  });

  constructor(
    private service: PensamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service
      .buscarPorId(Number(id))
      .subscribe((pensamento) => this.pensamento.set(pensamento));
  }

  excluirPensamento() {
    if (this.pensamento().id != 0) {
      this.service
        .excluir(Number(this.pensamento().id))
        .subscribe(() => this.router.navigate(['/listarPensamento']));
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
