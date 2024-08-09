import { Component, OnInit, signal } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento.model';
import { Router, RouterModule } from '@angular/router';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { PensamentoService } from '../pensamento/pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterModule, PensamentoComponent],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css',
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = signal<Pensamento[]>([]);

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service
      .listar()
      .subscribe((listaPensamentos) =>
        this.listaPensamentos.set(listaPensamentos)
      );
  }
}
