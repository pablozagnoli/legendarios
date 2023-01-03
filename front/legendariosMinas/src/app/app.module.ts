import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CarroselAnunciosComponent } from './carrosel-anuncios/carrosel-anuncios.component';
import { CadastrarPublicacoesComponent } from './AreaAdm/cadastrar-publicacoes/cadastrar-publicacoes.component';
import { ConsultarLegendarioComponent } from './AreaAdm/consultar-legendario/consultar-legendario.component';
import { HomeAdmComponent } from './AreaAdm/home-adm/home-adm.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { LoginAdmComponent } from './AreaAdm/login-adm/login-adm.component';
import { CadastroSenderistasComponent } from './cadastro-senderistas/cadastro-senderistas.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableHomeComponent } from './AreaAdm/home-adm/tablehome/table-home/table-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarLegendarioComponent } from './AreaAdm/home-adm/editar-legendario/editar-legendario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CarrouselComponent,
    CarroselAnunciosComponent,
    CadastrarPublicacoesComponent,
    ConsultarLegendarioComponent,
    HomeAdmComponent,
    LoginAdmComponent,
    CadastroSenderistasComponent,
    TableHomeComponent,
    EditarLegendarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
