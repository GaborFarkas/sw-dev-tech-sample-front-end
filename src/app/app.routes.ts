import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('../pages/home/home.page').then(module => module.HomePage) },
    { path: 'login', loadComponent: () => import('../pages/login/login.page').then(module => module.LoginPage) },
    { path: 'jobs', loadComponent: () => import('../pages/jobs/jobs.page').then(module => module.JobsPage) }
];
