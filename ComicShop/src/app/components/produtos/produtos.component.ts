import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comic } from 'src/app/models/quadrinho.model';
import { ComisApiService } from 'src/app/services/comis-api.service';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  constructor(public comicSvc: ComisApiService) {}

  allQuadrinhos!: Comic[];
  public carregado: boolean = false;

  ngOnInit(): void {
    this.carregado = false;
    this.getComics();

  }

  getComics() {
    this.comicSvc.getAllComics().subscribe((comics) => {
      this.carregado = true;
      this.allQuadrinhos = comics;
    });
  }
}
