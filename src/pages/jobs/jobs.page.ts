import { Component } from '@angular/core';
import { JobService } from '../../services/job.service';
import { JobResponse } from '../../models/job.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'div.jobs.app-page',
    standalone: true,
    providers: [JobService],
    imports: [CommonModule],
    templateUrl: './jobs.page.html'
})
export class JobsPage {
    protected jobs: JobResponse[] = [];

    constructor(private jobsService: JobService, private router: Router) {
        this.jobsService.getJobs().subscribe({
            next: resp => this.jobs = resp.data!,
            error: resp => this.router.navigate(['/login'])
        });
    }
}
