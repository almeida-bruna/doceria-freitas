import { FormaPagamentoComponent } from './pages/compra/forma-pagamento/forma-pagamento.component';
import { ResumoPedidoComponent } from './pages/compra/resumo-pedido/resumo-pedido.component';
import { ConfirmaEmailComponent } from './pages/compra/confirma-email/confirma-email.component';
import { ProdutoComponent } from './pages/compra/produto/produto.component';
import { LoginComponent } from './pages/login/login.component';
import { FaleConoscoComponent } from './pages/fale-conosco/fale-conosco.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PromocoesComponent } from './pages/promocoes/promocoes.component';
import { NovidadesComponent } from './pages/novidades/novidades.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreAEmpresaComponent } from './pages/sobre-a-empresa/sobre-a-empresa.component';
import { CadastroComponent } from './pages/usuario/cadastro/cadastro.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'promocoes', component: PromocoesComponent },
  { path: 'novidades', component: NovidadesComponent},
  { path: 'sobre_a_empresa', component: SobreAEmpresaComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'fale-conosco', component: FaleConoscoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'produto/:id', component: ProdutoComponent},
  { path: 'confirma-email', component: ConfirmaEmailComponent},
  { path: 'resumo-pedido', component: ResumoPedidoComponent},
  { path: 'forma-pagamento', component: FormaPagamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
