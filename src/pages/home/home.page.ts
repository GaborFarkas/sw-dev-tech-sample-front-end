import { Component } from '@angular/core';

@Component({
  selector: 'div.home.app-page',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export class HomePage {
    protected numJobs: number = 28000;

    constructor() {
        this.increaseJobs();
    }

    private increaseJobs() {
        this.numJobs++;
        setTimeout(this.increaseJobs.bind(this), Math.round(Math.random() * 500));
    }
}
