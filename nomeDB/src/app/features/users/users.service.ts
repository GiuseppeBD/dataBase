import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

urlGet = "http://localhost:3000/user";

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.urlGet);
  }
}
