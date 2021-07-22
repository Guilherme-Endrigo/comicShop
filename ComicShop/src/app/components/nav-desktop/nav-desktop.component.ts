import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html',
  styleUrls: ['./nav-desktop.component.css'],
})
export class NavDesktopComponent {
  public nomePersonagem: string = '';
  buscaPersonagem!: Observable<any>;

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  buscarPersonagens(): void {
   this.router.navigate(['/personagens', this.nomePersonagem]);
  }
}
