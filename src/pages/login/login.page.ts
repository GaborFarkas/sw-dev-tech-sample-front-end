import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest } from '../../models/auth.model';
import { CommonModule } from '@angular/common';
import { ResponseModel, ResponseStatus } from '../../models/response.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'div.login.app-page',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './login.page.html'
})
export class LoginPage {
    protected loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
    });

    /**
     * The server-side error message, if any.
     */
    protected errorMessage?: string;

    constructor(private authService: AuthService) { }

    protected submitForm() {
        this.errorMessage = undefined;
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.value as LoginRequest).subscribe({
                error: (error: HttpErrorResponse) => {
                    const backendError: ResponseModel = error.error;
                    if (backendError.status === ResponseStatus.ERROR) {
                        this.errorMessage = backendError.message;
                    }
                }
            });
        }
    }
}
