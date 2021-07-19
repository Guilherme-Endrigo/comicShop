import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[] = []
  constructor() { }

  ngOnInit(): void {
  }

  onUsuarioCreated(event: any){
    this.usuarios.push(event);
  }
}
