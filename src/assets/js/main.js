//dropdown menu
$(".dropdown-menu li a").click(function() {
  $(this)
    .parents(".dropdown")
    .find(".dropdownList")
    .html(
      $(this).text() +
        ' <span class="caret pl-2"><img src="assets/img/icon/dropdown-icon.png" alt=""></span>'
    );
  $(this)
    .parents(".dropdown")
    .find(".dropdownList")
    .val($(this).data("value"));
});
//menu mobile
function openMenu() {
  var menu = document.getElementById("mySidenav");
  menu.classList.add("active");
}

function closeNav() {
  var menu = document.getElementById("mySidenav");
  menu.classList.remove("active");
}
//countdown
// function startTimer(duration, display) {
//   var timer = duration, minutes, seconds;
//   setInterval(function () {
//       minutes = parseInt(timer / 60, 10)
//       seconds = parseInt(timer % 60, 10);

//       minutes = minutes < 10 ? "0" + minutes : minutes;
//       seconds = seconds < 10 ? "0" + seconds : seconds;

//       display.textContent = minutes + ":" + seconds;

//       if (--timer < 0) {
//         document.getElementById("time").innerHTML = "TIME UP";     
//       }
//   }, 1000);
  
// }

// window.onload = function () {
  
//   var fiveMinutes = 60 * 5,
//       display = document.querySelector('#time');
//   startTimer(fiveMinutes, display);
// }