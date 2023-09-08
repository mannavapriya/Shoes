import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchModel } from 'src/models/search.model';
import { ShoeModel } from 'src/models/shoe.model';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  public baseUrl = "https://localhost:7171/api/";
  constructor(private http: HttpClient) 
  {

  }

  GetShoes(model : SearchModel)
  {
    let headers = new HttpHeaders();
    headers.append('responseType', 'json');
    return this.http.post<Array<ShoeModel>>(this.baseUrl + 'Shoes', model, {headers : headers});
  }
}
