import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Sugestion } from 'src/app/models/sugestion.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {


  sugestions: Sugestion[] = [];

  sugestionForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.sugestionForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      sugestion: new FormControl(null, [Validators.minLength(50), Validators.required]),
    })
  }

  createSugestion(){
    console.log(this.sugestionForm);
    this.sugestions.push(this.sugestionForm.value);
    this.sugestionForm.reset();
    console.log(this.sugestions);
  }

}