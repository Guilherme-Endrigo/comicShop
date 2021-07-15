import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-btn-create-account',
  templateUrl: './btn-create-account.component.html',
  styleUrls: ['./btn-create-account.component.css']
})
export class BtnCreateAccountComponent implements OnInit {
  createFormBsModalRef!: BsModalRef;
  createForm!: FormGroup;

  constructor(
    private bsModalService: BsModalService
) { }
  ngOnInit(): void {
    this.createForm = new FormGroup({
      nome: new FormControl(),
      email: new FormControl(),
      senha: new FormControl(),
      endereco: new FormControl(),
      dataNascimento: new FormControl()
    })
  }

  openAccountCreateForm(template: TemplateRef<any>){
    this.createFormBsModalRef = this.bsModalService.show(template, {
      class: 'modal-sl modal-dialog-centered',
      ignoreBackdropClick: true
    })
  }
  
  closeAccountCreateForm(): void {
    this.createFormBsModalRef.hide();
  }
}
