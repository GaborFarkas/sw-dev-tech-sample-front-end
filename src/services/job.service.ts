import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../models/response.model';
import { environment } from '../environments/environment';
import { JobResponse } from '../models/job.model';
import { AuthService } from './auth.service';

@Injectable()
export class JobService {
    constructor(private http: HttpClient, private authService: AuthService) { }

    getJobs() {
        return this.http.get<ResponseModel<JobResponse[]>>(
            `${environment.backendUrl}/api/v1/jobs`, {
                headers: this.authService.createAuthHeaders()
            });
    }

    getJob(id: number) {
        return this.http.get<ResponseModel<JobResponse>>(
            `${environment.backendUrl}/api/v1/jobs/${id}`, {
                headers: this.authService.createAuthHeaders()
            });
    }
}
