import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequest, JwtResponse } from '../models/auth.model';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user.model';
import { ResponseModel, ResponseStatus } from '../models/response.model';
import { environment } from '../environments/environment';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {
        // Read JWT
        const str = localStorage.getItem('jwt');
        if (str) {
            this.jwtToken = JSON.parse(str);
            this.getUserData();
        }
    }

    public jwtToken?: JwtResponse;

    public user: BehaviorSubject<UserModel | null> = new BehaviorSubject<UserModel | null>(null);

    login(model: LoginRequest) {
        const loginRequest = this.http.post<ResponseModel<JwtResponse>>(`${environment.backendUrl}/api/v1/login`, model);
        loginRequest.subscribe(resp => {
            if (resp.status === ResponseStatus.SUCCESS) {
                //Save JWT
                localStorage.setItem('jwt', JSON.stringify(resp.data));

                this.jwtToken = resp.data;
                this.getUserData();
            }
        });

        return loginRequest;
    }

    getUserData() {
        const req = this.http.get<ResponseModel<UserModel>>(`${environment.backendUrl}/api/v1/login`, {
            headers: this.createAuthHeaders()
        });
        req.subscribe(resp => {
            this.user.next(resp.data!);
        });

        return req;
    }

    logout() {
        const req = this.http.get<ResponseModel<void>>(`${environment.backendUrl}/api/v1/logout`, {
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
