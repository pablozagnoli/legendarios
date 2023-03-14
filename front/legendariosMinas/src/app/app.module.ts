import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarrouselComponent } from './pages/carrousel/carrousel.component';
import { CarroselAnunciosComponent } from './pages/carrosel-anuncios/carrosel-anuncios.component';
import { CadastrarPublicacoesComponent } from './pages/AreaAdm/cadastrar-publicacoes/cadastrar-publicacoes.component';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CarrouselComponent,
    CarroselAnunciosComponent,
    CadastrarPublicacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    CommonModule,
    PagesModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
