$(document).ready(function() {
  main();
});

//Wywołanie wszystkcih funkcji
function main() {
  listener_contact();
  stickyNav();
  stickyOnClick();
  sectionSelect();
	sectionForEach();
  showmenu();
}

function listener_contact() {
  $('.contact_btn').on('click', function() {

    $('.error').css('display', 'none');
    $.ajax({
      type: "POST",
      dataType: 'json',
      url: "send.php",
      data: {
        name: $('#c_name').val(),
        email: $('#c_email').val(),
        text: $('#c_text').val()
      }
    }).done(function(data) {
      if (data.type == 'error') {
        $.each(data.code, function(k, v) {
          $('.err_c_' + k).html(v).css('display', 'block');
        });
      } else {
        $('.kontakt_box_all1').css('display', 'none');
        $('.kontakt_box_all2').css('display', 'block').html(data.code);
      }
    });

  });
}

// sticky navbar

function stickyNav() {
  $(window).on('scroll', function() {
    if ($(window).scrollTop()) {
      $('.sticky').addClass('black');
    } else {
      $('.sticky').removeClass('black');
    }
  });
}

// smooth scrolling
function sectionSelect() {
  $(window).scroll(function() {
    w_top = $(window).scrollTop() + 120;
    $('.sekcja').each(function() {
      if (w_top >= $(this).offset().top) {
        $('.li').removeClass('li_active');
        $('#' + $(this).data('type')).addClass('li_active');
      }
    });
  });
}

function stickyOnClick() {
  $('.li').on('click', function() {
    var id = $(this).attr('id');
    var wtop = $('#s' + id).offset().top;
    $('html, body').animate({
      scrollTop: wtop
    }, 1500);
  });
}

function sectionForEach() {
  $('.sekcja').each(function() {
    console.log($(this).offset());
  });
}

//responsive navbar
function showmenu(){
  $('#hiddenMenu').on('click', function(){
    $('.lista').css('display', 'block');
    $('.lista').addClass('.black');
  });
}
// scroll show dla skilli
$(window).scroll(function() {
    if ($(this).scrollTop() > 800) {
        $('#way1').fadeIn();
    }
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
        $('#way2').fadeIn();
    }
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 1200) {
        $('#way3').fadeIn();
    }
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 1400) {
        $('#way4').fadeIn();
    }
});
