import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

  constructor(private http: HttpClient){ }
registerUser(userData): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/soustest/users/', userData);
}

}
