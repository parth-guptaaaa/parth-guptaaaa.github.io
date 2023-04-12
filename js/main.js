$(document).ready(function(){

     $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop()>35)
        {
            $('.header').css({'background':'#002e5f','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
        }
        else
        {
            $('.header').css({'background':'none','box-shadow':'none'});
        }
    });

    const counters = document.querySelectorAll('.counter');
    const speed = 120;
    counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target / speed;
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};
	  updateCount();
   });

   (function ($) {
    "use strict";
    
    $(".clients-carousel").owlCarousel({
        items: 1, // Display one item at a time
        loop: true, // Enable loop
        autoplay: true, // Enable autoplay
        autoplayTimeout: 3000, // Set autoplay timeout to 3 seconds
        autoplayHoverPause: true, // Pause autoplay on hover
        smartSpeed: 1000, // Set sliding speed to 1 second
        nav: true, // Disable navigation buttons
        dots: true // Disable dots navigation
    });

    $('.test-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          992: {
            items: 3
          }
        }
      });
    
})(jQuery);

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

$('.accordion-header').click(function(){
    $('.accordion .accordion-body').slideUp(500);
    $(this).next('.accordion-body').slideDown(500);
    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-');
});

jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
});

// stART 

const slider = document.querySelector('.slider-1');
const dotsContainer = document.querySelector('.dots-container-1');
const dots = dotsContainer.querySelectorAll('.dot-1');
let currentSlide = 0;

const slideInterval = setInterval(() => {
  currentSlide = (currentSlide + 1) % (slider.children.length / 5);
  const scrollAmount = currentSlide * (slider.scrollWidth / 3);
  slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  setActiveDot(currentSlide);
}, 50000);

const dotClickHandler = (e) => {
  const clickedDotIndex = Array.from(dots).indexOf(e.target);
  currentSlide = clickedDotIndex;
  const scrollAmount = currentSlide * (slider.scrollWidth / 3);
  slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  setActiveDot(currentSlide);
};

const setActiveDot = (dotIndex) => {
  dots.forEach((dot) => dot.classList.remove('active'));
  dots[dotIndex].classList.add('active');
};

dots.forEach((dot) => {
  dot.addEventListener('click', dotClickHandler);
});

slider.addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

slider.addEventListener('mouseleave', () => {
  slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % (slider.children.length / 5);
    const scrollAmount = currentSlide * (slider.scrollWidth / 3);
    slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    setActiveDot(currentSlide);
  }, 10000);
});

// END 


});


