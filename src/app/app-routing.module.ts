import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciadorProdutoComponent } from './gerenciador-produto/gerenciador-produto.component';

const routes: Routes = [

  { path: 'gerenciador-produto', component: GerenciadorProdutoComponent },
  { path: '', redirectTo: '/gerenciador-produto', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
