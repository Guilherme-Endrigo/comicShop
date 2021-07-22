import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-btn-git',
  templateUrl: './btn-git.component.html',
  styleUrls: ['./btn-git.component.css']
})
export class BtnGitComponent implements OnInit {
  gitFormBsModalRef!: BsModalRef;

  constructor(private bsModalService: BsModalService) { }

  ngOnInit(): void {
  }

  openGitForm(template: TemplateRef<any>){
    this.gitFormBsModalRef = this.bsModalService.show(template, {
      class: 'moda-sl modal-dialog-centered',
      ignoreBackdropClick: true,
      keyboard: false
    })
  }

  closeGitForm(): void {
    this.gitFormBsModalRef.hide();
  }
  
}
