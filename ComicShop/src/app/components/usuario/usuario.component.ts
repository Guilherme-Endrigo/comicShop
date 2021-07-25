import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];

  public usuarioEmail!: string;
  public usuarioNome!: string;
  public usuarioSenha!: number;
  public logado: boolean = false;
  public existe: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.logado = false;
  }

  onUsuarioCreated(event: any) {
    console.log(event);
    this.usuarios.push(event);
    console.log(this.usuarios);
  }

  logar(): void {
    if (this.usuarios.length > 0) {
      this.usuarios.forEach((usuario) => {
        if (this.usuarioEmail === usuario.email && this.usuarioSenha === usuario.senha) {
          this.usuarioEmail = usuario.email;
          this.usuarioSenha = usuario.senha;
          this.usuarioNome = usuario.nome;
          localStorage.setItem('usuario', JSON.stringify(usuario));
          this.logado = true;
        } 
      });
    } else {
      alert('Nenhum usuário cadastrado!');
    }
  }

  deslogar(): void {
    this.usuarioNome = '';
    localStorage.removeItem('usuario');
    this.logado = false;
  }
}
