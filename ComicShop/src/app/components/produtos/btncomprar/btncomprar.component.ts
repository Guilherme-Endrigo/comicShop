import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { ComisApiService } from 'src/app/services/comis-api.service';
import { GlobalConstants } from '../../../common/global-constants';

@Component({
  selector: 'app-btncomprar',
  templateUrl: './btncomprar.component.html',
  styleUrls: ['./btncomprar.component.css'],
})
export class BtncomprarComponent implements OnInit {
  @Input()
  comic: any;

  comicId!: Observable<any[]>;
  productList = GlobalConstants.productList;
  cartFormBsModalRef!: BsModalRef;
  listItens: Array<any> = [];

  constructor(
    public comicSvc: ComisApiService,
    private bsModalService: BsModalService
  ) {}

  ngOnInit(): void {}

  getComicCart() {

    this.comicId = this.comicSvc.getComic(this.comic)
    GlobalConstants.productList.push(this.comic); //lembrando que aqui tem que trocar o this.productList por uma variável global


  }

  listComics() {

    // // this.productList.push(this.comic); //lembrando que aqui tem que trocar o this.productList por uma variável global

    // // this.productList.forEach((element) => {
    // // this.comicId = this.comicSvc.getComic(element);
    // // this.listItens.push(this.comicId);
    // // });

    // this.listItens.push(test);
    // this.listItens.forEach((element) => {
    //   this.comicId = this.comicSvc.getComic(element);
    // });

    // return this.comicId;

  }

  openCarShopForm(template: TemplateRef<any>) {
    this.cartFormBsModalRef = this.bsModalService.show(template, {
      class: 'moda-sl modal-dialog-centered',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }

  buyCarShopForm(): void {
    alert('Compra realizada com sucesso!');
    this.cartFormBsModalRef.hide();
  }

  closeCarShopForm(): void {
    this.cartFormBsModalRef.hide();
  }
}
