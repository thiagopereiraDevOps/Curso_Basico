import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {

  // Variáveil de imagem
  imagem: string = 'assets/um-dia-ensolarado-com-nuvens-brancas-fofas.avif';

  // Função para alterar a imagem
  alterarImagem() {
    if (this.imagem === 'assets/um-dia-ensolarado-com-nuvens-brancas-fofas.avif') {
      this.imagem = 'rio-na-noite-20989778.webp';
    }else{
      this.imagem = 'assets/um-dia-ensolarado-com-nuvens-brancas-fofas.avif';
    }
  }
}
