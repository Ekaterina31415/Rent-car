$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })

  var swiper = new Swiper('.swiper-about', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });

  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var selectBody = $('.select__body'),
      selectBtn = $('[data-toggle="select-list"]');

    selectBtn.on('click', function () {
      selectBody.toggleClass('select__body--visible');
    });

  let selectItem = $('.select__item');

  selectItem.on('click', (e) => {
    let text = e.currentTarget.innerHTML;
    select = e.currentTarget.closest('.select'),
      currentText = e.currentTarget.closest('.select').querySelector('.select__current');
      currentText.innerHTML = text;
      select.classList.remove('select__body--visible');
  });
  
  $('.1day').on('click', function () {
    $('.currently-sum-num').text('300');
    $('.prev-sum').text('400');
    $('#select-input').value = '1 день';
  })
  $('.3days').on('click', function () {
    $('.currently-sum-num').text('500');
    $('.prev-sum').text('600');
    $('#select-input').value = '3 дня';
  })
  $('.5days').on('click', function () {
    $('.currently-sum-num').text('900');
    $('.prev-sum').text('1000');
    $('#select-input').value = '5 дней';
  })
  $('.7days').on('click', function () {
    $('.currently-sum-num').text('1400');
    $('.prev-sum').text('1600');
    $('#select-input').value = '7 дней';
  })
  $('.10days').on('click', function () {
    $('.currently-sum-num').text('1900');
    $('.prev-sum').text('2280');
    $('#select-input').value = '10 дней';
  })

//  Ховер для первого видео
  $('.video__play').on('mouseenter', function () {
    $(this).animate({'width': '258px'});
  })
  $('.video__play').on('mouseleave', function () {
    $(this).animate({ 'width': '248px' });
  })
// Промокод
$('.promocode').on('click', function () {
  $(this).css({'display': 'none'});
  $('#promocode-input').fadeIn(1000);
})

// в отписках валидация и маска
});