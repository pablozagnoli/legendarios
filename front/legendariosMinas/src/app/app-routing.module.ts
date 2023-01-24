import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarLegendarioComponent } from './pages/AreaAdm/home-adm/editar-legendario/editar-legendario.component';
import { HomeAdmComponent } from './pages/AreaAdm/home-adm/home-adm.component';
import { LoginAdmComponent } from './pages/AreaAdm/login-adm/login-adm.component';
import { CadastroSenderistasComponent } from './pages/cadastro-senderistas/cadastro-senderistas.component';
import { StatusPagamentoComponent } from './pages/cadastro-senderistas/pagamento-cadastro-senderista/status-pagamento/status-pagamento.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login-adm',
    component: LoginAdmComponent
  },
  {
    path: 'cadastrar-sendenrista',
    component: CadastroSenderistasComponent
  },
  {
    path: 'home-adm',
    component: HomeAdmComponent
  },
  {
    path: 'editar-legendario',
    component: EditarLegendarioComponent
  }
  ,
  {
    path: 'status-pagamento',
    component: StatusPagamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
