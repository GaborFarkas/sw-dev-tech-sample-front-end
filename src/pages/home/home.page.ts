import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'div.home.app-page',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export class HomePage implements AfterViewInit {
    protected numJobs: number = 28000;

    constructor() {
        this.increaseJobs();
    }

    private increaseJobs() {
        this.numJobs++;
        setTimeout(this.increaseJobs.bind(this), Math.round(Math.random() * 500));
    }

    ngAfterViewInit() {
        $("#preloader").animate({
            'opacity': '0'
        }, 600, function(){
            setTimeout(function(){
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            var box = $('.header-text').height();
            var header = $('header').height();

            if (scroll! >= box! - header!) {
                $("header").addClass("background-header");
            } else {
                $("header").removeClass("background-header");
            }
        });

        if ($('.owl-clients').length) {
            ($('.owl-clients') as any).owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 30
                    }
                }
            });
        }

        if ($('.owl-banner').length) {
            ($('.owl-banner') as any).owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 0,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 1,
                        margin: 20
                    },
                    992: {
                        items: 1,
                        margin: 30
                    }
                }
            });
        }
    }
}
