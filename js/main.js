$(document).ready(function () {
  // btnTop(IE not supports. Supports all major browsers)
  window.scrollY
  document.scrollingElement.scrollTop
  document.documentElement.scrollTop
  document.querySelector('html').scrollTop

  window.addEventListener('scroll', () => {
    if (window.pageYOffset <= 0) {
      jQuery('.btn-top').removeClass('showButton')
    } else {
      jQuery('.btn-top').addClass('showButton')
    }
  })
  jQuery(window).on('touchmove', function (e) {
    if (window.pageYOffset <= 0) {
      jQuery('.btn-top').removeClass('showButton')
    } else {
      jQuery('.btn-top').addClass('showButton')
    }
  })
  jQuery('.btn-top').on('click touch', function () {
    jQuery('html,body').animate({ scrollTop: 0 }, 300)
    jQuery('.btn-top').removeClass('showButton')
  })

  // 모바일 100vh 하단 가려지는 현상 해결
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  // document.querySelector('.wrap_result', '.wrap_receipt', '.wrap_error').style.height = window.innerHeight + "px";
})
