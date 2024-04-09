import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequest, JwtResponse } from '../models/auth.model';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user.model';
import { ResponseModel, ResponseStatus } from '../models/response.model';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }

    public jwtToken?: JwtResponse;

    public user: BehaviorSubject<UserModel|null> = new BehaviorSubject<UserModel|null>(null);

    login(model: LoginRequest) {
        const loginRequest = this.http.post<JwtResponse>('http://127.0.0.1:8000/api/login', model);
        loginRequest.subscribe(jwt => {
            if (jwt.status === ResponseStatus.SUCCESS) {
                this.jwtToken = jwt;
                this.getUserData();
            }
        });

        return loginRequest;
    }

    getUserData() {
        const req = this.http.get<UserModel>('http://127.0.0.1:8000/api/login', {
            headers: this.createAuthHeaders()
        });
        req.subscribe(user => {
            this.user.next(user);
        });

        return req;
    }

    logout() {
        const req = this.http.get<ResponseModel>('http://127.0.0.1:8000/api/logout', {
            headers: this.createAuthHeaders()
        });
        req.subscribe(resp => {
            if (resp.status === ResponseStatus.SUCCESS) {
                this.user.next(null);
            }
        });

        return req;
    }

    public createAuthHeaders() {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.jwtToken?.access_token}`,
            'X-Requested-With': 'XMLHttpRequest'
        });
    }
}
