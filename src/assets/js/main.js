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
//input
