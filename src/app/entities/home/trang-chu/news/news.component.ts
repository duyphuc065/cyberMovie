import { Component, OnInit, AfterViewInit } from "@angular/core";
declare var $: any;

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit,AfterViewInit {
  constructor() {}

  ngOnInit() {}
  // slideConfig = {
  //   "prevArrow":
  //   '<img class="left-arrow" src="assets/img/icon/back-session.png">',
  // "nextArrow":
  //   '<img class="right-arrow" src="assets/img/icon/next-session.png">',
  // "centerMode": true,
  // "variableWidth": true,
  // "focusOnSelect": true,
  // "slidesToShow": 3,
  // "responsive": [
  //   {
  //     "breakpoint": 600,
  //     "arrows": false
  //   }
  // ]
  // };
  ngAfterViewInit() {
    // console.log(324);
    var gadgetCarousel = $(".sliders");

    gadgetCarousel.each(function() {
      if ($(this).is(".slick-news")) {
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
    // $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
    //   $(".slick-soon").slick("setPosition");
    // });
  }
}
