import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-btn-create-account',
  templateUrl: './btn-create-account.component.html',
  styleUrls: ['./btn-create-account.component.css']
})
export class BtnCreateAccountComponent implements OnInit {

  usuarios: Usuario[] = [{
    nome: "guilherme",
    email: "endrigo.guilherme@hotmail.com",
    senha: 12345,
    endereco: "rua oliveira",
    dataNascimento: "21/06/1994"
  }]

  createFormBsModalRef!: BsModalRef;
  createForm!: FormGroup;

  dateConfig: BsDatepickerConfig = new BsDatepickerConfig();

  @Output() usuarioCreated = new EventEmitter;

  constructor(
    private bsModalService: BsModalService
  ) {
    this.dateConfig.containerClass = 'theme-dark-blue';
  }

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
      class: 'moda-sl modal-dialog-centered',
      ignoreBackdropClick: true,
      keyboard: false
    })
  }
  
  closeAccountCreateForm(): void {
    this.createFormBsModalRef.hide();
  }

  createAccount(){
    console.log(this.createForm);
    this.usuarios.push(this.createForm.value);
    this.usuarioCreated.emit(this.createForm.value);
    this.createFormBsModalRef.hide();
  }
}
