import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorProdutoComponent } from './gerenciador-produto.component';

describe('GerenciadorProdutoComponent', () => {
  let component: GerenciadorProdutoComponent;
  let fixture: ComponentFixture<GerenciadorProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciadorProdutoComponent]
    });
    fixture = TestBed.createComponent(GerenciadorProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
