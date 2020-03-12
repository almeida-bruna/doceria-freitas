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
  { path: 'cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
