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

  var selectBody = $('.select__body'),
      selectBtn = $('[data-toggle="select-list"]');

    selectBtn.on('click', function () {
      selectBody.toggleClass('select__body--visible');
    });

  let selectItem = $('.select__item');

  selectItem.on('click', function () {
    selectBody.toggleClass('select__body--visible');
  });

  function selectChoose() {
    let text = this.innerText,
    select = = this.closest('.select'),
    currentText = this.closest('.select').querySelector(selectors: '
    .select__current');
    currentText.innerText = text;
    select.classList.remove(token: 'is-active');
  }

});