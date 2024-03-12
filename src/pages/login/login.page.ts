import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'div.login.app-page',
    standalone: true,
    providers: [AuthService],
    templateUrl: './login.page.html'
})
export class LoginPage {
    constructor(private authService: AuthService) { }

    login() {
        this.authService.login().subscribe(nextVal => {
            console.log(nextVal);
        });
    }
}
