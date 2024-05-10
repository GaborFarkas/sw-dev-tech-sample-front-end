import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HomePage } from './home.page';
import * as $ from 'jquery';

describe('HomePage', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomePage],
        }).compileComponents();
    });

    it('should create the page', () => {
        const fixture = TestBed.createComponent(HomePage);
        const homePage = fixture.componentInstance;
        expect(homePage).toBeTruthy();
    });

    it('increases jobs with time', () => {
        const fixture = TestBed.createComponent(HomePage);
        const compiled = fixture.nativeElement as HTMLElement;

        const jobNum = parseInt(compiled.querySelector('h2')!.textContent!.replace(/[A-z]/, ''));
        console.log(compiled.querySelector('.banner.header-text h2'));
        fakeAsync(() => {
            tick(1000);
        });
        const jobNum2 = parseInt(compiled.querySelector('h2')!.textContent!.replace(/[A-z]/, ''));

        expect(jobNum2).toBeGreaterThan(jobNum);
    });
});
