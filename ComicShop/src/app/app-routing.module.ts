import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CharComponent } from './components/char-component/char-component.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home/quadrinhos',
    redirectTo: 'quadrinhos',
  },
  {
    path: 'home/personagens',
    redirectTo: 'personagens',
  },
  {
    path: 'quadrinhos',
    redirectTo: 'quadrinhos',
  },
  {
    path: 'personagens',
    redirectTo: 'personagens',
  },
  {
    path: 'contato',
    redirectTo: 'contato',
  },
  { path: 'home', component: AboutUsComponent },
  {
    path: 'quadrinhos',
    component: ProdutosComponent,
  },
  {
    path: 'personagens',
    component: CharComponent,
  },
  {
    path: 'login',
    component: UsuarioComponent,
  },
  {
    path: 'contato',
    component: ContactUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
