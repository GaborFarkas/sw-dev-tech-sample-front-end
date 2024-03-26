import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest } from '../../models/auth.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'div.login.app-page',
    standalone: true,
    providers: [AuthService],
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './login.page.html'
})
export class LoginPage {
    protected loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
    });

    constructor(private authService: AuthService) { }

    protected submitForm() {
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.value as LoginRequest);
        } else {
            console.log('The form is invalid');
        }
    }
}
