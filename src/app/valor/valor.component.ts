import { Component } from '@angular/core'; // Importa o decorador Component do Angular

@Component({
  selector: 'app-valor', // Define o seletor do componente (usado na marcação HTML)
  templateUrl: './valor.component.html', // Especifica o arquivo de template HTML do componente
  styleUrls: ['./valor.component.css'], // Especifica os arquivos de estilo do componente
  standalone: false, // Indica que o componente não é independente (faz parte de um módulo)
})
export class ValorComponent { // Declaração da classe do componente
  valor1: number = 0; // Declaração da variável para armazenar o valor, inicializada como 0
  valor2: number = 0; 
  valor3: number = 0; 
  maior: number | null = null; // Variável que armazenará o maior valor, inicializada como null

  // Função para calcular o maior valor entre os três números informados
  calcularMaior() {
    this.maior = Math.max(this.valor1, this.valor2, this.valor3); // Usa Math.max para encontrar o maior valor
  }
}
