import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root',
})

export class ComisApiService {
  private publicKey = `9ab5fedb49c9d6617eba7fed8e3da3fa`;
  private privateKey: string = '0ac65598f1894aedb77d90c676b71eaf5e9df167';
  private urlComics: string =
    'https://gateway.marvel.com:443/v1/public/comics?';

  constructor(private http: HttpClient) {}

  getAllComics(): Observable<any> {
    let url = this.urlComics + 'hasDigitalIssue=true&' + this.getParams();
    return this.http.get<any>(url).pipe(map((data: any) => data.data.results));
  }

  getParams(): string {
    let ts = new Date().getTime();
    let hash = Md5.hashStr(ts + this.privateKey + this.publicKey);
    let params = 'ts=' + ts + '&apikey=' + this.publicKey + '&hash=' + hash;

    return params;
  }
}
