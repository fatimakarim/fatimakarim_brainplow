import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "../Config";
@Injectable()
export class HomeService {
  constructor(private http: Http) { }

  searchProducts(id) {
      return this.http.get(Config.api+'data_against_zipcode/'+id).map((response: Response) => response.json());
  }
}
