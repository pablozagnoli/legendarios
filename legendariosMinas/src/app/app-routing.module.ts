import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdmComponent } from './AreaAdm/login-adm/login-adm.component';
import { CadastroSenderistasComponent } from './cadastro-senderistas/cadastro-senderistas.component';
import { HomeComponent } from './home/home.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
