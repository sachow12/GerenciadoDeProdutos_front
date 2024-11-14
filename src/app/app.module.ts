import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Importe o módulo de rotas
import { GerenciadorProdutoComponent } from './gerenciador-produto/gerenciador-produto.component';
import { ReactiveFormsModule } from '@angular/forms'; // Importe o ReactiveFormsModule
import { MatFormFieldModule } from '@angular/material/form-field'; // MatFormField
import { MatInputModule } from '@angular/material/input'; // MatInput
import { MatCheckboxModule } from '@angular/material/checkbox'; // MatCheckbox
import { MatCardModule } from '@angular/material/card'; // MatCard
import { MatButtonModule } from '@angular/material/button'; // MatButton
import { MatSnackBarModule } from '@angular/material/snack-bar'; // MatSnackBar
import { HttpClientModule } from '@angular/common/http'; // Certifique-se de importar o HttpClientModule



@NgModule({
  declarations: [
    AppComponent,
    GerenciadorProdutoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Importe o ReactiveFormsModule para usar formulários reativos
    MatFormFieldModule,   // Importe os módulos do Angular Material
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,   // Adicione o HttpClientModule para chamadas HTTP
    MatSnackBarModule,    // Para usar o MatSnackBar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
