import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'nav',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.css'
})
export class NavigationComponent {
    protected user?: string;

    protected login() {
        this.user = 'J. Doe';
    }

    protected logout() {
        this.user = undefined;
    }
}
