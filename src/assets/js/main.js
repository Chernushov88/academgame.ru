$(function ($) {
  $(".phone").mask("+7(999) 999-99-99");
  $('.lecturer-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 100000,
    fade: true,
    adaptiveHeight: true,
    prevArrow:"<button class='slick-prev'><img src='img/prev.png' alt=\"\"></button>",
    nextArrow:"<button class='slick-next'><img src='img/next.png' alt=\"\"></button>"
  })
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 200 ) {
      $(".header").addClass('fixed');
    } else {
      $(".header").removeClass('fixed');
    }
  });

})
function showPopup(target, elem, urlImg,  desc ) {
  event.preventDefault()
  document.querySelector(".darken").classList.add('active')
  document.querySelector(target).classList.add('open')
  //console.log(elem)
  if (urlImg){
    elem.classList.add('active')
    //elem.childNodes[0].src = urlImg
    document.querySelector('#img img').src = urlImg
  }
  if(document.querySelector(target + ' .desc')){
    document.querySelector(target + ' .desc').innerHTML = desc ? desc : ''
  }
}
function hidePopup(target) {
  event.preventDefault()
  document.querySelector(".darken").classList.remove('active')
  document.querySelector(target).classList.remove('open')
  let list = document.querySelectorAll('.button-list li a')
  list.forEach(e=>{
    e.classList.remove('active')
  })
}
function touchMenu(elem, menu) {
  $(elem).toggleClass('active');
  $(menu).toggleClass('active');
  $('.menuLayer').toggleClass('active');
  //addIconsMenu(menu);
}
window.addEventListener('load', function () {
  let darken = document.querySelector('.darken')
  let list = document.querySelectorAll('.button-list li a')
  let menuLayer = document.querySelector('.menuLayer')
  let touch_menu = document.querySelector('.touch_menu')
  let menu = document.querySelector('#menu')

  darken.addEventListener('click', function (e) {
    console.log(e)
    //document.querySelector('.popup').classList.remove("open")
    document.querySelectorAll('.popup').forEach(e=>{
      e.classList.remove('open')
    })
    darken.classList.remove('active')
    menuLayer.classList.remove('active')
    list.forEach(e=>{
      e.classList.remove('active')
    })
  });
  menuLayer.addEventListener('click', function (e) {
    menuLayer.classList.remove('active')
    menu.classList.remove('active')
    touch_menu.classList.remove('active')
  });
})
