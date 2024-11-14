import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciadorProdutoComponent } from './gerenciador-produto/gerenciador-produto.component';
 // Importe o componente correto

const routes: Routes = [
  // Rota para o Gerenciador de Produtos
  { path: 'gerenciador-produto', component: GerenciadorProdutoComponent },

  // Definir uma rota padrão para redirecionar para o gerenciador de produtos
  { path: '', redirectTo: '/gerenciador-produto', pathMatch: 'full' },

  // Se houver outras rotas, adicione aqui
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
