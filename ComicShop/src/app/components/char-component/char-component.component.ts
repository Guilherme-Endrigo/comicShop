import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { CharApiService } from 'src/app/services/char-api.service';

@Component({
  selector: 'app-char-component',
  templateUrl: './char-component.component.html',
  styleUrls: ['./char-component.component.css'],
})
export class CharComponent implements OnInit {
  constructor(private charSvc: CharApiService, private route: ActivatedRoute) {}

  nomePersonagem!: string;
  allPersonagens!: Observable<any>;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.nomePersonagem = params.get('nomePersonagem')!;
      this.getPersonagens(this.nomePersonagem);
    });
  }

  getPersonagens(nome: string) {
    this.allPersonagens = this.charSvc.getAllPersonagens(nome);
  }
}
