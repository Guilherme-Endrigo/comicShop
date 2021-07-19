import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharApiService } from 'src/app/services/char-api.service';

@Component({
  selector: 'app-char-component',
  templateUrl: './char-component.component.html',
  styleUrls: ['./char-component.component.css'],
})
export class CharComponent implements OnInit {
  constructor(private charSvc: CharApiService) {}

  allPersonagens!: Observable<any>;

  ngOnInit(): void {
    this.getPersonagens();
  }

  getPersonagens() {
    this.allPersonagens = this.charSvc.getAllPersonagens();
  }
}
