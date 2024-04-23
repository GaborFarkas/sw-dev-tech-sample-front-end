import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserModel } from '../../models/user.model';

@Component({
    selector: 'nav',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnDestroy {
    constructor(private authService: AuthService) {
        this.subscription = authService.user.subscribe(next => {
            this.user = next;
        });
    }

    private subscription;

    protected user: UserModel | null = null;

    protected logout() {
        this.authService.logout();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
