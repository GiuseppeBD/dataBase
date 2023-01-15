import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DettagliUser } from 'src/app/core/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class DettagliUserService {

url ="http://localhost:3000/user"

  constructor(private http: HttpClient) { }


loadDettagli(){
return this.http.get<DettagliUser>(this.url)
}






}
