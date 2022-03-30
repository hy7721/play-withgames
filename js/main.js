$(document).ready(function () {
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

  $('.notice-title').click(function () {
    $(this).next('.notice-detail').stop().slideToggle(300)
    $(this).toggleClass('on').siblings().removeClass('on')
    $(this).next('.notice-detail').siblings('.notice-detail').slideUp(300) // 1개씩 펼치기
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

  // parallax effect
  function parallaxEffect() {
    var $fwindow = $(window)
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop

    var $contents = []
    var $backgrounds = []

    $('[data-type="content"]').each(function (index, e) {
      var $contentObj = $(this)

      $contentObj.__speed = $contentObj.data('speed') || 1
      $contentObj.__fgOffset = $contentObj.offset().top
      $contents.push($contentObj)
    })

    $('[data-type="background"]').each(function () {
      var $backgroundObj = $(this)

      $backgroundObj.__speed = $backgroundObj.data('speed') || 1
      $backgroundObj.__fgOffset = $backgroundObj.offset().top
      $backgrounds.push($backgroundObj)
    })

    $fwindow.on('scroll resize', function () {
      scrollTop = window.pageYOffset || document.documentElement.scrollTop

      $contents.forEach(function ($contentObj) {
        var yPos = $contentObj.__fgOffset - scrollTop / $contentObj.__speed

        $contentObj.css('top', yPos)
      })

      $backgrounds.forEach(function ($backgroundObj) {
        var yPos = -(
          (scrollTop - $backgroundObj.__fgOffset) /
          $backgroundObj.__speed
        )

        $backgroundObj.css({
          backgroundPosition: '50% ' + yPos + 'px',
        })
      })
    })

    $fwindow.trigger('scroll')
  }

  parallaxEffect()
})
