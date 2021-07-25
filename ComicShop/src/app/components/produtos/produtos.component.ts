import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComisApiService } from 'src/app/services/comis-api.service';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  constructor(public comicSvc: ComisApiService) {}

  allQuadrinhos!: Observable<any>;

  ngOnInit(): void {
    this.getComics();
  }

  getComics() {
    this.allQuadrinhos = this.comicSvc.getAllComics();
  }

}
