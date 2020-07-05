$(function() {
  // HEADER

  // Parallax header
  $(window).scroll(function() {
    const scroll = $(window).scrollTop(),
      slowScroll = scroll / 2;
    $('#header').css({ transform: 'translateY(' + slowScroll + 'px)' });
  });

  // NAVBAR

  // sticky nav
  $(document).ready(function() {
    const nav = $('.home-nav');
    const head = $('#header');
    const headHeight = head.height();
    // fix top the nav if you are not arriving on top of the home page
    nav.removeClass('fixed-bottom', $(this).scrollTop() >= headHeight);
    nav.toggleClass('fixed-top', $(this).scrollTop() >= headHeight);

    $(document).scroll(function() {
      const scrolled = $(this).scrollTop();
      //  Toggle the class fixed-bottom when the nav is completly at the bottom. like that the mobile menu open from bottom to top
      nav.toggleClass('fixed-bottom', scrolled == 0);
      // Toggle class fixed-top when nav touch the top of the screen
      nav.toggleClass('fixed-top', scrolled >= headHeight);
    });
  });

  //  Mobile nav animated btn
  $(document).ready(function() {
    $('.mobile-button').on('click', function() {
      $('.animated-mobile-icon').toggleClass('open');
    });
  });

  // ToTop btn
  $('#top').hide();
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 1000) {
      $('#top').fadeIn(500);
    } else {
      $('#top').fadeOut(500);
    }
  });

  // SCROLL to top
  $(document).ready(function() {
    $('#top, .arrow').click(function() {
      if ($(this).attr('href') === '#header') {
        // scroll body to where the menu became fixed
        const HeadHeight = $('#header').height();
        $('body,html').animate({ scrollTop: 0 + HeadHeight }, 400);
      } else {
        // scroll to top
        $('body,html').animate({ scrollTop: 0 }, 400);
      }
      return false;
    });
  });

  // Scroll

  $(document).ready(function() {
    $('.navbar .nav-link, .navbar logo-nav').on('click', function() {
      if (this.hash !== '') {
        const hash = this.hash;

        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function() {
            window.location.hash = hash;
          }
        );
      }
    });
  });

  // MODAL Program page

  $(document).ready(function() {
    function trailerAndCloseModal() {
      const trigger = $('body').find('[data-toggle="modal"]');
      trigger.click(function() {
        const modal = $(this).data('target');

        videoSRC = $(this).attr('data-Video');
        $(modal + ' iFrame').attr('src', videoSRC);
        $('[id*=mod_]').on('hidden.bs.modal', function() {
          // remove the src of the iFrame to stop the video
          $('[id*=mod_] iFrame').removeAttr('src');
          // reset the form
          $('.was-validated').removeClass('was-validated d-none');
          $('.succes').addClass('d-none');
        });
      });
    }

    trailerAndCloseModal();
  });

  // BOOKING FORM Program page

  $(document).ready(function() {
    $('.needs-validation').on('submit', function(e) {
      if (!this.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        e.preventDefault();
        $(this).addClass('d-none');
        $('.succes').removeClass('d-none');
      }
      $(this).addClass('was-validated');
    });
  });

  // make link to specific tabs

  $(document).ready(function() {
    function onHashChange() {
      const hash = window.location.hash;

      if (hash) {
        // Trigger a click on the good # tab
        $(`[data-toggle="tab"][href="${hash}"]`).trigger('click');
      }
    }

    window.addEventListener('hashchange', onHashChange, false);
    onHashChange();
  });
});
