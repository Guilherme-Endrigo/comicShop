import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavDesktopComponent } from './nav-desktop/nav-desktop.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { BtnCreateAccountComponent } from './usuario/btn-create-account/btn-create-account.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavDesktopComponent,
    FooterComponent,
    AboutUsComponent,
    CarrouselComponent,
    ProdutosComponent,
    UsuarioComponent,
    BtnCreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
