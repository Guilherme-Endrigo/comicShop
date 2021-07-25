import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root',
})

export class ComisApiService {
  private publicKey = `dadf708548c33c0f35097c1274a3775e`;
  private privateKey: string = '88fd93f2455f0ef672734efb5f9b6efed8349fee';
  private urlComics: string =
    'https://gateway.marvel.com:443/v1/public/comics?';
  private urlComic: string =
    'https://gateway.marvel.com:443/v1/public/comics/';

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

  getComic(id:any): Observable<any> {
    let url = this.urlComic + id +'?' + this.getParams();
    return this.http.get<any>(url).pipe(map((data: any) => data.data.results));
  }


}
