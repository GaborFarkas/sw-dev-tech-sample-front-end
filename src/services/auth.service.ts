import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }

    login() {
        return this.http.get<UserModel>('http://127.0.0.1:8000/api/test');
    }
}
