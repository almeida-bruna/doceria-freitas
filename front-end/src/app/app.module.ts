import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule , IConfig } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PromocoesComponent } from './pages/promocoes/promocoes.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/usuario/cadastro/cadastro.component';
import { NovidadesComponent } from './pages/novidades/novidades.component';
import { SobreAEmpresaComponent } from './pages/sobre-a-empresa/sobre-a-empresa.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FaleConoscoComponent } from './pages/fale-conosco/fale-conosco.component';
import { LoginComponent } from './pages/login/login.component';
import { CarrinhoComponent } from './pages/compra/carrinho/carrinho.component';
import { ProdutoComponent } from './pages/compra/produto/produto.component';
import { ConfirmaEmailComponent } from './pages/compra/confirma-email/confirma-email.component';
import { ResumoPedidoComponent } from './pages/compra/resumo-pedido/resumo-pedido.component';
import { FormaPagamentoComponent } from './pages/compra/forma-pagamento/forma-pagamento.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PromocoesComponent,
    HomeComponent,
    CadastroComponent,
    NovidadesComponent,
    SobreAEmpresaComponent,
    FaleConoscoComponent,
    LoginComponent,
    CarrinhoComponent,
    ProdutoComponent,
    ConfirmaEmailComponent,
    ResumoPedidoComponent,
    FormaPagamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxMaskModule.forRoot()
  ],
  providers: [ HomeComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
