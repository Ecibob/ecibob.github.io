// FLIP CARDS WORKSHOP PAGE
const cards = document.querySelectorAll('.card');

function transition() {
  if (this.classList.contains('activeFlip')) {
    this.classList.remove('activeFlip');
  } else {
    this.classList.add('activeFlip');   
  }
}

cards.forEach(card => card.addEventListener('click', transition));

// TOP NAV SLIDER
$(document).ready(function () {

  $(".menuItem").hover(function () {
    var pos = $(this).attr("alt");
    $("#slider").stop().animate({
      marginLeft: 15 * (pos - 1) + "vw",
    }, 300)

  });

})

