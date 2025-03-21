import { NgModule } from '@angular/core'; // Importa o decorador NgModule para definir um módulo Angular
import { BrowserModule } from '@angular/platform-browser'; // Módulo necessário para rodar a aplicação no navegador

import { AppRoutingModule } from './app-routing.module'; // Importa o módulo de roteamento da aplicação
import { AppComponent } from './app.component'; // Importa o componente raiz da aplicação
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Importa o módulo do Bootstrap para Angular
import { ValorComponent } from './valor/valor.component'; // Importa o componente que calcula o maior valor
import { FormsModule } from '@angular/forms'; // Importa o módulo necessário para trabalhar com formulários e ngModel

@NgModule({
  declarations: [
    AppComponent, // Declaração do componente raiz da aplicação
    ValorComponent // Declaração do componente de cálculo do maior valor
  ],
  imports: [
    BrowserModule, // Permite que a aplicação funcione em navegadores
    AppRoutingModule, // Configuração das rotas da aplicação
    NgbModule, // Habilita os componentes do Bootstrap no Angular
    FormsModule // Permite o uso do ngModel para binding de dados nos inputs
  ],
  providers: [], // Lista de serviços injetáveis (vazia neste caso)
  bootstrap: [AppComponent] // Define o componente que será iniciado quando a aplicação for carregada
})
export class AppModule { } // Exporta a classe do módulo principal da aplicação
