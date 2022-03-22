$(document).ready(function () {
  // accordion
  $('#accordion').accordion()

  // back to top button
  let scrollTop = $('.btn-top')

  $(window).scroll(function () {
    let topPosition = $(this).scrollTop()

    if (topPosition > 100) {
      $(scrollTop).css('opacity', '1')
    } else {
      $(scrollTop).css('opacity', '0')
    }
  })

  $(scrollTop).click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      500
    )
    return false
  })

  // scroll animation
  $('.btn-scroll').on('click touch', function (e) {
    e.preventDefault()

    var hash = this.hash

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      600,
      function () {
        window.location.hash = hash
      }
    )
  })

  // layer popup
  function layerPopupOpen($t) {
    $('.play-popup' + '.' + $t)
      .stop(true, true)
      .fadeIn(300)
  }
  function layerPopupClose() {
    $('.play-popup').each(function () {
      if ($(this).css('display') != 'none')
        $(this).stop(true, true).fadeOut(300)
    })
  }

  $(document).on('click', '.btn-close', function () {
    if (!$(this).parent().css('display') != 'none') {
      layerPopupClose()
    }
  })

  // MO height=100vh 하단 가려지는 현상 해결
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
})
