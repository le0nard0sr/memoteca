import { Component, input } from '@angular/core';
import { Pensamento } from './pensamento.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css',
})
export class PensamentoComponent {
  pensamento = input.required<Pensamento>();

  constructor() {}

  larguraPensamento(): string {
    if (this.pensamento().conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
