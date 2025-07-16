$(document).ready(function () {

  // Start Back To Top Section 
  $('.btn-backtotops').hide();
  $(window).scroll(function () {
    let getscrolltop = $(this).scrollTop();
    if (getscrolltop >= 370) {
      $('.btn-backtotops').fadeIn(1000);
    } else {
      $('.btn-backtotops').fadeOut(1000);
    }
  });
  // End Back To Top Section 

  // start werone 
  $(window).scroll(function () {

    let getscroll = $(this).scrollTop();
    console.log(getscroll);

    if (getscroll >= 2100) {
      $('.visiontext').addClass('fromlefts');
      $('.goaltext').addClass('fromrights');
    } else {
      $('.visiontext').removeClass('fromlefts');
      $('.goaltext').removeClass('fromrights');
    }
  });
  // end werone 

});

// Start Footer Section 
const getyear = document.getElementById('getyear');
const getfullyear = new Date().getFullYear();
getyear.textContent = getfullyear;
// End Footer Section 

// Start Back To Top Section 
document.querySelector('.btn-backtotops').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
// End Back To Top Section 


function isInViewport(element) {
  var elementTop = element.offset().top;
  var elementBottom = elementTop + element.outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
}

// spotlight animation
$(window).on('scroll load', function () {
  $('.spotlightcards').each(function (index) {
    var card = $(this);
    if (isInViewport(card) && !card.hasClass('visible')) {
      setTimeout(function () {
        card.addClass('visible');
      }, index * 300);
    }
  });
});
// spotlight animation

// werone animation

$(window).on('scroll load', function () {
  $('.weronecards').each(function (index) {
    var card = $(this);
    if (isInViewport(card) && !card.hasClass('visible')) {
      setTimeout(function () {
        card.addClass('visible');
      }, index * 300);
    }
  });
});
// werone animation


// mission animation
$(window).on('scroll load', function () {
  $('.missioncards').each(function (index) {
    var card = $(this);
    if (isInViewport(card) && !card.hasClass('visible')) {
      setTimeout(function () {
        card.addClass('visible');
      }, index * 300);
    }
  });
});
// mission animation


// investor animation
$(window).on('scroll load', function () {
  $('.investorcards').each(function (index) {
    var card = $(this);
    if (isInViewport(card) && !card.hasClass('visible')) {
      setTimeout(function () {
        card.addClass('visible');
      }, index * 300);
    }
  });
});
// investor animation

// media animation
$(window).on('scroll load', function () {
  $('.mediacards').each(function (index) {
    var card = $(this);
    if (isInViewport(card) && !card.hasClass('visible')) {
      setTimeout(function () {
        card.addClass('visible');
      }, index * 300);
    }
  });
});
// media animation

// Start partner Section 
$(".filters").hide();
$(".soc").show();

$('.partnerlists').click(function () {
  $(this).addClass('activeitems');
  $(this).addClass('activeitems').siblings().removeClass('activeitems');
  const filtervalue = $(this).data('filter');

  $(".filters").hide();
  $('.filters').filter('.' + filtervalue).show("puff", 1000);

});
// End partner Section 

// comingsoon start
function goToComingSoon() {
  window.location.href = "comingsoon.html";
}
// comingsoon end


