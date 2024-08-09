import { Pensamento } from './../pensamento/pensamento.model';
import { Component, OnInit, signal } from '@angular/core';
import { PensamentoService } from '../pensamento/pensamento.service';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css',
})
export class EditarPensamentoComponent implements OnInit {
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

  editarPensamento(): void {
    if (this.pensamento().id != 0) {
      this.service
        .editar(this.pensamento()!)
        .subscribe(() => this.router.navigate(['/listarPensamento']));
    }
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamento']);
  }
}
