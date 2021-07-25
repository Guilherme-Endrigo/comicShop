import { formatCurrency } from '@angular/common';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Comic } from 'src/app/models/quadrinho.model';
import { ComisApiService } from 'src/app/services/comis-api.service';
import { GlobalConstants } from '../../../common/global-constants';

@Component({
  selector: 'app-btncomprar',
  templateUrl: './btncomprar.component.html',
  styleUrls: ['./btncomprar.component.css'],
})
export class BtnComprarComponent implements OnInit {
  @Input()
  comic!: Comic;

  productList = GlobalConstants.productList;
  cartFormBsModalRef!: BsModalRef;

  constructor(
    public comicSvc: ComisApiService,
    private bsModalService: BsModalService
  ) {}

  ngOnInit(): void {}

  getComicCart() {
    let index = this.productList.findIndex(
      (comicPedido) => comicPedido.id == this.comic.id
    );

    if (index > -1) {
      this.productList[index].quantidade++;
    } else {
      this.comic.quantidade = 1;
      this.productList.push(this.comic);
    }
  }

  alterarQtd(comic: Comic, quantidade: number): void {
    if (quantidade < 1) {
      quantidade = 1;
    }
    comic.quantidade = quantidade;
  }

  removePedido(comic: Comic): void {
    let index = this.productList.findIndex(
      (comicPedido) => comicPedido.id == comic.id
    );

    if (index > -1) {
      this.productList.splice(index, 1);
    }
  }

  getTotal(): string {
    let total: number = 0;

    this.productList.forEach((comic) => {
      let precoComic = comic.prices[0].price * comic.quantidade;

      total += precoComic;
    });

    return formatCurrency(total, 'en-us', '$');
  }

  openCarShopForm(template: TemplateRef<any>) {
    this.cartFormBsModalRef = this.bsModalService.show(template, {
      class: 'moda-sl modal-dialog-centered',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }

  buyCarShopForm(): void {
    this.productList.splice(0, this.productList.length);
    alert('Compra realizada com sucesso!');
    this.cartFormBsModalRef.hide();
  }

  closeCarShopForm(): void {
    this.cartFormBsModalRef.hide();
  }
}
