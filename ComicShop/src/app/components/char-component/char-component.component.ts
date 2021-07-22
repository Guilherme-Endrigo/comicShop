import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CharApiService } from 'src/app/services/char-api.service';

@Component({
  selector: 'app-char-component',
  templateUrl: './char-component.component.html',
  styleUrls: ['./char-component.component.css'],
})
export class CharComponent implements OnInit {
  constructor(private charSvc: CharApiService, private route: ActivatedRoute) {}

  allPersonagens!: Observable<any>;

  ngOnInit(): void {
    this.getPersonagens();
  }

  getPersonagens() {
    let nome = this.route.snapshot.paramMap.get('nomePersonagem')!;
    this.allPersonagens = this.charSvc.getAllPersonagens(nome);
  }
}
