import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // https://api.mlab.com/api/1/databases/camaradas/collections/admins?apiKey=

  constructor(private http: HttpClient) { }

  getClients(){
    return this.http.get(
      "https://api.mlab.com/api/1/databases/camaradas/collections/clientes?apiKey="
    );
  }

  postClient(client){
    return this.http.post(
      "https://api.mlab.com/api/1/databases/camaradas/collections/clientes?apiKey=",
      client,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }
    );
  }
}
