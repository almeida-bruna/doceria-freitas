import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromocoesComponent } from './promocoes/promocoes.component';


const routes: Routes = [
  { path: 'promocoes', component: PromocoesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
