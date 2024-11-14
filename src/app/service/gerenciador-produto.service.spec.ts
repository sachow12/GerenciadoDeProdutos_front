import { GerenciadorProdutoComponent } from './../gerenciador-produto/gerenciador-produto.component';
import { TestBed } from '@angular/core/testing';
import { GerenciadorProdutoService } from './gerenciador-produto.service';



describe('GerenciadorProduto', () => {
  let service: GerenciadorProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciadorProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
