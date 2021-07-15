import { Component, OnInit } from '@angular/core';
import { Quadrinho } from '../models/quadrinho.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  quadrinhos: Quadrinho[] = [{
    nome: "DIAS DE UM FUTURO ESQUECIDO",
    grupoHerois: "X-MAN",
    imgPath: "../../assets/img/capa_exemploHQ.png",
    descricao: "Historia foda dos xman"
  },
  
  {
    nome: "DIAS DE UM FUTURO ESQUECIDO",
    grupoHerois: "X-MAN",
    imgPath: "../../assets/img/capa_exemploHQ.png",
    descricao: "Historia foda dos xman"
  },
  {
    nome: "DIAS DE UM FUTURO ESQUECIDO",
    grupoHerois: "X-MAN",
    imgPath: "../../assets/img/capa_exemploHQ.png",
    descricao: "Historia foda dos xman"  },
  {
    nome: "DIAS DE UM FUTURO ESQUECIDO",
    grupoHerois: "X-MAN",
    imgPath: "../../assets/img/capa_exemploHQ.png",
    descricao: "Historia foda dos xman"  },
  {
    nome: "DIAS DE UM FUTURO ESQUECIDO",
    grupoHerois: "X-MAN",
    imgPath: "../../assets/img/capa_exemploHQ.png",
    descricao: "Historia foda dos xman"  },
  {
    nome: "DIAS DE UM FUTURO ESQUECIDO",
    grupoHerois: "X-MAN",
    imgPath: "../../assets/img/capa_exemploHQ.png",
    descricao: "Historia foda dos xman"  }]
  
  constructor() { }

  ngOnInit(): void {
  }

}
