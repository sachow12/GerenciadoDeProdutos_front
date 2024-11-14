import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GerenciadorProdutoService } from '../service/gerenciador-produto.service';

@Component({
  selector: 'app-produto-view',
  templateUrl: './gerenciador-produto.component.html',
  styleUrls: ['./gerenciador-produto.component.css']
})
export class GerenciadorProdutoComponent implements OnInit {
  produtoForm!: FormGroup;
  produtos: any[] = [];

  constructor(
    private gerenciadorProdutoService: GerenciadorProdutoService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.produtoForm = new FormGroup({
      idProduto: new FormControl(''), 
      codigoProduto: new FormControl(''),
      descricaoProduto: new FormControl(''),
      precoProduto: new FormControl(''),
      qtdEstoqueProduto: new FormControl(''),
      statusProduto: new FormControl(false),
      promocaoProduto: new FormControl(false),
      referenciaProduto: new FormControl(''),
      destaqueProduto: new FormControl(false),
      imgTopoProduto: new FormControl(''),
      grupoCategoriaProduto: new FormControl(''),
    });
  }

  getProdutos() {
    this.gerenciadorProdutoService.getProdutos().subscribe(
      (data) => {
        this.produtos = data;
      },
      (error) => {
        console.error('Erro ao buscar produtos', error);
        this.openSnackBar('Erro ao buscar produtos.');
      }
    );
  }

  criarProduto() {
    const produto = this.produtoForm.value;
    const novoProduto = {
      codigo: produto.codigoProduto,
      descricao: produto.descricaoProduto,
      precoPromocional: produto.precoProduto,
      promocao: produto.promocaoProduto,
      qtdEstoque: produto.qtdEstoqueProduto,
      status: produto.statusProduto,
      titulo: produto.descricaoProduto,
      valor: produto.precoProduto,
      referencia: produto.referenciaProduto,
      destaque: produto.destaqueProduto,
      imgTopo: [produto.imgTopoProduto],
      gruposCategorias: { id: 5, descricao: 'remedios' }
    };

    this.gerenciadorProdutoService.criarProduto(novoProduto).subscribe(
      (data) => {
        this.openSnackBar('Produto criado com sucesso!');
        this.getProdutos();
      },
      (error) => {
        console.error('Erro ao criar produto', error);
        this.openSnackBar('Erro ao criar produto.');
      }
    );
  }

  atualizarProduto() {
    const id = this.produtoForm.get('idProduto')?.value;
    if (!id) {
      this.openSnackBar('ID é necessário para atualização!');
      return;
    }

    const produto = this.produtoForm.value;
    const produtoAtualizado = {
      codigo: produto.codigoProduto || null,
      descricao: produto.descricaoProduto || null,
      precoPromocional: produto.precoProduto || null,
      promocao: produto.promocaoProduto || null,
      qtdEstoque: produto.qtdEstoqueProduto || null,
      status: produto.statusProduto || null,
      titulo: produto.descricaoProduto || null,
      valor: produto.precoProduto || null,
      referencia: produto.referenciaProduto || null,
      destaque: produto.destaqueProduto || null,
      imgTopo: produto.imgTopoProduto ? [produto.imgTopoProduto] : null,
      gruposCategorias: { id: 5, descricao: 'remedios' }
    };

    this.gerenciadorProdutoService.atualizarProduto(id, produtoAtualizado).subscribe(
      (data) => {
        this.openSnackBar('Produto atualizado com sucesso!');
        this.getProdutos();
      },
      (error) => {
        console.error('Erro ao atualizar produto', error);
        this.openSnackBar('Erro ao atualizar produto.');
      }
    );
  }

  deletarProduto() {
    const id = this.produtoForm.get('idProduto')?.value;
    console.log("Deletando produto com ID: ", id);

    if (!id) {
      this.openSnackBar('ID é necessário para deleção!');
      return;
    }

    this.gerenciadorProdutoService.deletarProduto(id).subscribe(
      (data) => {
        this.openSnackBar('Produto deletado com sucesso!');
        this.getProdutos();
      },
      (error) => {
        console.error('Erro ao deletar produto', error);
        this.openSnackBar('Erro ao deletar produto.');
      }
    );
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000,
    });
  }
}
