import { Component, OnInit } from "@angular/core";
declare var $: any;

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
   // console.log(324);
    var gadgetCarousel = $(".sliders");

    gadgetCarousel.each(function() {
      if ($(this).is(".slick-film")) {
        $(this).slick({
          prevArrow:
            '<img class="left-arrow" src="assets/img/icon/back-session.png">',
          nextArrow:
            '<img class="right-arrow" src="assets/img/icon/next-session.png">',
          infinite: true,
          speed: 300,
          slidesPerRow: 4,
          rows: 2,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesPerRow: 3,
                rows: 2,
                infinite: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesPerRow: 2,
                rows: 2,
                infinite: true,
                arrows: false,
                dot: false
              }
            }
          ]
        });
      } else if ($(this).is(".slick-soon")) {
        $(this).slick({
          prevArrow:
            '<img class="left-arrow" src="assets/img/icon/back-session.png">',
          nextArrow:
            '<img class="right-arrow" src="assets/img/icon/next-session.png">',
          infinite: true,
          speed: 300,
          slidesPerRow: 4,
          rows: 2,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesPerRow: 3,
                rows: 2,
                infinite: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesPerRow: 2,
                rows: 2,
                infinite: true,
                arrows: false,
                dot: false
              }
            }
          ]
        });
      } else if ($(this).is(".slick-news")) {
        $(this).slick({
          prevArrow:
            '<img class="left-arrow" src="assets/img/icon/back-session.png">',
          nextArrow:
            '<img class="right-arrow" src="assets/img/icon/next-session.png">',
          centerMode: true,
          variableWidth: true,
          focusOnSelect: true,
          slidesToShow: 3,
          responsive: [
            {
              breakpoint: 600,
              arrows: false
            }
          ]
        });
      } else {
        $(this).slick();
      }
    });
    $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
      $(".slick-soon").slick("setPosition");
    });
    
  }
}
