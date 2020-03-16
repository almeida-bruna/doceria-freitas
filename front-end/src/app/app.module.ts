import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PromocoesComponent,
    HomeComponent,
    CadastroComponent,
    NovidadesComponent,
    SobreAEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
