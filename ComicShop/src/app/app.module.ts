import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavDesktopComponent } from './components/nav-desktop/nav-desktop.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { UsuarioComponent } from '././components/usuario/usuario.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CharComponent } from './components/char-component/char-component.component';
import { CharactersComponent } from './components/char-component/characters/characters.component';
import { BtnCreateAccountComponent } from './components/usuario/btn-create-account/btn-create-account.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


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
    CharComponent,
    CharactersComponent,
    ContactUsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(), 
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
