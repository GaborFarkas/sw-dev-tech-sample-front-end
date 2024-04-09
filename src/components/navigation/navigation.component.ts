import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserModel } from '../../models/user.model';

@Component({
    selector: 'nav',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.css'
})
export class NavigationComponent {
    constructor(private authService: AuthService) {
        authService.user.subscribe(next => {
            this.user = next;
        });
    }

    protected user: UserModel | null = null;

    protected logout() {
        this.authService.logout();
    }
}
