
let CurrentWebPage = 'webpage-home'

$(function() {
  $('.home').click(async function() {
    SwitchWebPage('webpage-home')
  })

  $('.news').click(async function() {
    SwitchWebPage('webpage-news')
  })

  $('.officers').click(async function() {
    SwitchWebPage('webpage-officers')
  })

  $('.developers').click(async function() {
    SwitchWebPage('webpage-developers')
  })

  $('.photo').click(async function() {
    $('#image-viewer-image').attr('src', this.src)

    $('#image-viewer-image').css('display', 'block')
    $('.image-viewer').css('display', 'block')
  })
})

function SwitchWebPage(page) {
  if (CurrentWebPage == page) {
    return
  }
  $('.' + CurrentWebPage).fadeOut(300)
  $('.' + page).fadeIn(300)
  CurrentWebPage = page
}